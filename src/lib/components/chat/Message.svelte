<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Item from '$lib/components/ui/item/index.js';
	import { Toggle } from '$lib/components/ui/toggle/index.js';

	import { Brain } from '@lucide/svelte';
	import { slide, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Separator } from '../ui/separator';

	export interface MessageProps {
		name: string;
		secondaryName: string;
		image: string;
		thoughts?: string;
		content: string;
	}

	let { name, secondaryName, image, thoughts, content }: MessageProps = $props();

	let showThoughts = $state(false);

	function toggleThoughts() {
		showThoughts = !showThoughts;
	}
</script>

<div class="flex gap-3 p-4 rounded-lg border border-border">
	<div class="flex-shrink-0">
		<Avatar.Root class="size-10">
			<Avatar.Image src={image} alt={name} />
			<Avatar.Fallback class="bg-primary text-primary-foreground">
				{name.charAt(0).toUpperCase()}
			</Avatar.Fallback>
		</Avatar.Root>
	</div>
	
	<div class="flex-1 min-w-0">
		<div class="mb-2 flex items-start justify-between">
			<div>
				<h4 class="font-semibold text-sm text-foreground">{name}</h4>
				<span class="text-xs text-muted-foreground">{secondaryName}</span>
			</div>
			
			{#if thoughts}
				<Toggle
					bind:pressed={showThoughts}
					size="sm"
					aria-label={showThoughts ? "Hide thoughts" : "View thoughts"}
				>
					<Brain class="size-3.5" />
				</Toggle>
			{/if}
		</div>
		<Separator class="mb-2" />
		
		{#if showThoughts && thoughts}
			<div 
				class="mb-2 p-2 bg-muted/50 rounded-md text-sm text-muted-foreground"
				in:slide={{ duration: 200, easing: quintOut }}
				out:slide={{ duration: 150, easing: quintOut }}
			>
				<div in:fade={{ duration: 200, delay: 50 }} out:fade={{ duration: 100 }}>
					{thoughts}
				</div>
			</div>
		{/if}
  
		<div class="text-sm text-foreground leading-relaxed">
			{content}
		</div>
	</div>
</div>
