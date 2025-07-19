import type { Message } from "@/state/chat";
import { generateStreamedResponse } from "@/service/chat-service";

export class ChatStore {

    messages = $state<Message[]>([]);
    controller = $state<AbortController | null>(null);
    isStreaming = $derived(this.controller !== null);
    response = $state<string | null>(null);

    async submitMessage(message: string) {
        message = message.trim();
        if (message === '') return;

        this.messages.push({
            author: 'user',
            content: message,
            timestamp: Date.now()
        });

        this.controller = new AbortController();
        const stream = await generateStreamedResponse(
            this.messages.map((message) => ({
                role: message.author as "user" | "assistant",
                content: message.content
            })),
            this.controller.signal
        );

        const reader = stream.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            if (!this.response) this.response = "";
            console.log(value);
            this.response += value;
          }
        } catch (error) {
          if (error instanceof Error && error.name !== "AbortError") {
            throw error;
          }
        } finally {
          reader.releaseLock();
        }
    
        if (!this.controller?.signal.aborted && this.response) {
          this.messages.push({
            author: 'assistant',
            content: this.response,
            timestamp: Date.now()
          });
        }
        this.controller = null;
        this.response = null;
    }

    abort() {
        if (this.controller) {
            this.controller.abort();
            this.controller = null;
            this.response = null;
        }
    }
}

const chatStore = new ChatStore();

export function useChatStore() {
    return chatStore;
}