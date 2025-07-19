import Anthropic from "@anthropic-ai/sdk";
import type { RawMessage } from "@/state/chat";
import type { TextDelta } from "@anthropic-ai/sdk/resources";
const client = new Anthropic({
  apiKey: import.meta.env.ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true
})

export async function generateStreamedResponse(messages: RawMessage[], abortSignal: AbortSignal) {
  const stream = await client.messages.create({
    model: "claude-3-7-sonnet-20250219",
    messages: messages.map((message) => ({
      role: message.role,
      content: message.content
    })),
    max_tokens: 1000,
    stream: true,
  }, {
      signal: abortSignal
    });

  // Create readable stream by piping events from the Anthropic stream
  // and streaming each char with 1ms intervals
  const readableStream: ReadableStream<string> = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (chunk.type === "content_block_delta") {
            const delta = chunk.delta as TextDelta;
            for (const char of delta.text) {
              if (abortSignal.aborted) {
                controller.close();
                return;
              }
              controller.enqueue(char);
              await new Promise((resolve) => setTimeout(resolve, 0.5));
            }
          }
        }
      } catch (error) {
        controller.error(error);
      } finally {
        controller.close();
      }
    }
  });

  return readableStream;
}