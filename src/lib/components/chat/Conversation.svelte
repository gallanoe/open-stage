<script lang="ts">
	import Message, { type MessageProps } from './Message.svelte';

	export interface ConversationProps {
		messages: MessageProps[];
	}

	let { messages = [] }: ConversationProps = $props();
</script>

<div class="flex flex-col gap-4 w-full max-h-[600px] overflow-y-auto p-4">
	{#if messages.length === 0}
		<div class="text-center text-muted-foreground py-8">
			No messages yet
		</div>
	{:else}
		{#each messages as message, index (index)}
			<Message
				name={message.name}
				secondaryName={message.secondaryName}
				image={message.image}
				thoughts={message.thoughts}
				content={message.content}
			/>
		{/each}
	{/if}
</div>

