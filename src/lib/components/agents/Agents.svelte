<script lang="ts">
    import { AgentStore } from "@/store/agent.svelte";
    import type { Agent } from "@/model/agent";

    const agentStore = new AgentStore();

</script>

{#snippet agent(agent: Agent)}
    <div>
        <h1>{agent.name}</h1>
        <p>{agent.description}</p>
        <ul>
            {#each agent.tools as tool}
                <li>{tool.name}</li>
            {/each}
        </ul>
    </div>
{/snippet}




