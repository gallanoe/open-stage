import type { Message } from "@/model/chat";
import { generateStreamedResponse } from "@/service/chat-service";

export class ChatStore {

    messages = $state<Message[]>([]);
    controller = $state<AbortController | null>(null);
    isStreaming = $derived(this.controller !== null);

    async submitMessage(message: string) {
        message = message.trim();
        if (message === '') return;

        this.messages.push({
            author: 'user',
            content: message,
            timestamp: Date.now(),
            isStreaming: false
        });

        this.messages.push({
            author: 'assistant',
            content: '',
            timestamp: Date.now(),
            isStreaming: true,
        });
        const rawMessages = this.messages
            .map((message) => ({
                role: message.author as "user" | "assistant",
                content: message.content
            }));
        
        this.controller = new AbortController();
        const stream = await generateStreamedResponse(
            rawMessages,
            this.controller.signal
        );
        const reader = stream.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            this.messages.at(-1)!.content += value;
          }
        } catch (error) {
          if (error instanceof Error && error.name !== "AbortError") {
            throw error;
          }
        } finally {
          reader.releaseLock();
        }
        this.messages.at(-1)!.isStreaming = false;
        this.controller = null;
    }

    abort() {
        if (this.controller) {
            this.controller.abort();
            this.controller = null;
        }
    }
}

const chatStore = new ChatStore();

export function useChatStore() {
    return chatStore;
}