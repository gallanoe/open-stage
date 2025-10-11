import type { Agent } from "@/model/agent";

export class AgentStore {
    agents = $state<Agent[]>([]);
    agentsById = $derived(new Map(this.agents.map(agent => [agent.id, agent])));

    async createAgent(agent: Agent) {
        this.agents.push(agent);
    }

}