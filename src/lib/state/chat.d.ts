export interface Message {
    author: string;
    content: string;
    timestamp: number;
}

export interface Chat {
    messages: Message[];
    isStreaming: boolean;
    controller: AbortController | null;
}

export interface RawMessage {
    role: "user" | "assistant";
    content: string;
}