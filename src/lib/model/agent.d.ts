

export interface Tool {
    name: string;
    description: string;
    parameters: Record<string, any>;
}

export interface Agent {
    id: string;
    name: string;
    description: string;
    tools: Tool[];
    createdAt: Date;
    updatedAt: Date;
}
