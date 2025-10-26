<script lang="ts">
	import Message, { type MessageProps } from './Message.svelte';

	export interface ConversationMessage {
		role: 'user' | 'character' | 'director';
		name: string;
		secondaryName: string;
		image: string;
		thoughts?: string;
		content?: string;
		isStreaming?: boolean;
	}

	export interface ConversationProps {
		variant?: 'narrative' | 'chat';
		messages: ConversationMessage[];
	}

	let { variant = 'narrative', messages = [] }: ConversationProps = $props();

	// Map semantic role to visual variant based on conversation variant
	function getMessageVariant(role: 'user' | 'character' | 'director'): 'left' | 'right' | 'full' {
		if (variant === 'narrative') {
			return 'full';
		}
		
		// In chat mode, map roles to visual positions
		if (role === 'user') {
			return 'right';
		} else if (role === 'character') {
			return 'left';
		} else if (role === 'director') {
			// Director messages are full-width even in chat mode
			return 'full';
		}
		
		return 'full';
	}
</script>

<div class="flex flex-col gap-4 w-full max-h-[600px] overflow-y-auto p-4">
	{#if messages.length === 0}
		<div class="text-center text-muted-foreground py-8">
			No messages yet
		</div>
	{:else}
		{#each messages as message, index (index)}
			<Message
				variant={getMessageVariant(message.role)}
				name={message.name}
				secondaryName={message.secondaryName}
				image={message.image}
				thoughts={message.thoughts}
				content={message.content}
				isStreaming={message.isStreaming}
			/>
		{/each}
	{/if}
</div>

