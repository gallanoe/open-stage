<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import { Brain } from '@lucide/svelte';
	import { slide, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  
	export interface MessageProps {
	  variant?: 'left' | 'right' | 'full' | 'director';
	  name: string;
	  secondaryName: string;
	  image: string;
	  thoughts?: string;
	  content?: string;
	  isStreaming?: boolean;
	}

	let { variant = 'full', name, secondaryName, image, thoughts, content, isStreaming = false }: MessageProps = $props();
	let showThoughts = $state(false);
  </script>
  
{#if variant === 'full'}
  <!-- Full-width variant (current design) -->
  <div class="group flex gap-2.5 p-3 rounded-lg border border-border hover:border-border/80 transition-colors">
	<!-- Avatar column -->
	<div class="flex-shrink-0">
	  <Avatar.Root class="size-8">
		<Avatar.Image src={image} alt={name} />
		<Avatar.Fallback class="bg-primary text-primary-foreground text-xs">
		  {name.charAt(0).toUpperCase()}
		</Avatar.Fallback>
	  </Avatar.Root>
	</div>

	<!-- Content column -->
	<div class="flex-1 min-w-0 space-y-1.5">
	  <!-- Compact inline header -->
	  <div class="flex items-baseline gap-1.5">
		<span class="font-semibold text-sm leading-none">{name}</span>
		<span class="text-xs text-muted-foreground leading-none">{secondaryName}</span>
		
		<!-- Brain icon (visible on hover or when active) -->
		{#if thoughts}
		<button 
			class="ml-auto p-1 rounded hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
			class:opacity-100={showThoughts}
			class:bg-muted={showThoughts}
			onclick={() => showThoughts = !showThoughts}
			aria-label={showThoughts ? "Hide thoughts" : "View thoughts"}
		>
			<Brain class="size-3.5 {showThoughts ? 'text-foreground' : 'text-muted-foreground'}" />
		</button>
		{/if}
	  </div>
	  
	  <!-- Thoughts section -->
	  {#if showThoughts && thoughts}
		<div 
		  class="p-2 bg-muted/50 rounded-md text-xs text-muted-foreground"
		  in:slide={{ duration: 200, easing: quintOut }}
		  out:slide={{ duration: 150, easing: quintOut }}
		>
		  <div class="flex items-start gap-1.5" in:fade={{ duration: 200, delay: 50 }} out:fade={{ duration: 100 }}>
			<Brain class="size-3 flex-shrink-0 mt-0.5 opacity-60" />
			<span class="flex-1">{thoughts}</span>
		  </div>
		</div>
	  {/if}

	  <!-- Message content -->
	  {#if isStreaming && !content}
		<div class="space-y-2">
		  <Skeleton class="h-3 w-full" />
		  <Skeleton class="h-3 w-full" />
		  <Skeleton class="h-3 w-3/4" />
		</div>
	  {:else if content}
		<div class="text-sm text-foreground leading-relaxed">
		  {content}
		</div>
	  {/if}
	</div>
  </div>

{:else if variant === 'left'}
  <!-- Left variant (agent messages) -->
  <div class="flex justify-start gap-2.5">
	<!-- Avatar -->
	<div class="flex-shrink-0">
	  <Avatar.Root class="size-8">
		<Avatar.Image src={image} alt={name} />
		<Avatar.Fallback class="bg-primary text-primary-foreground text-xs">
		  {name.charAt(0).toUpperCase()}
		</Avatar.Fallback>
	  </Avatar.Root>
	</div>

	<!-- Content wrapper -->
	<div class="flex-1 max-w-[70%] space-y-1">
	  <!-- Name header outside bubble -->
	  <div class="px-1">
		<span class="font-semibold text-sm leading-none">{name}</span>
	  </div>

	  <!-- Hover wrapper for bubble and brain icon -->
	  <div class="group relative">
		<!-- Message bubble -->
		<div class="p-3 rounded-lg bg-muted/30 border border-border space-y-1.5">
		  <!-- Thoughts section -->
		  {#if showThoughts && thoughts}
			<div 
			  class="p-2 bg-muted/50 rounded-md text-xs text-muted-foreground"
			  in:slide={{ duration: 200, easing: quintOut }}
			  out:slide={{ duration: 150, easing: quintOut }}
			>
			  <div class="flex items-start gap-1.5" in:fade={{ duration: 200, delay: 50 }} out:fade={{ duration: 100 }}>
				<Brain class="size-3 flex-shrink-0 mt-0.5 opacity-60" />
				<span class="flex-1">{thoughts}</span>
			  </div>
			</div>
		  {/if}

		  <!-- Message content -->
		  {#if isStreaming && !content}
			<div class="space-y-2">
			  <Skeleton class="h-3 w-full" />
			  <Skeleton class="h-3 w-full" />
			  <Skeleton class="h-3 w-3/4" />
			</div>
		  {:else if content}
			<div class="text-sm text-foreground leading-relaxed">
			  {content}
			</div>
		  {/if}
		</div>

		<!-- Brain icon below bubble (visible on hover or when active) -->
		{#if thoughts}
		  <div class="flex justify-end mt-1 px-1">
			<button 
				class="p-1 rounded hover:bg-muted transition-colors opacity-0 group-hover:opacity-100 {showThoughts ? 'opacity-100 bg-muted' : ''}"
				onclick={() => showThoughts = !showThoughts}
				aria-label={showThoughts ? "Hide thoughts" : "View thoughts"}
			>
				<Brain class="size-3.5 {showThoughts ? 'text-foreground' : 'text-muted-foreground'}" />
			</button>
		  </div>
		{/if}
	  </div>
	</div>
  </div>

{:else if variant === 'right'}
  <!-- Right variant (user messages) -->
  <div class="flex justify-end gap-2.5">
	<!-- Content wrapper -->
	<div class="flex-1 max-w-[70%] flex flex-col items-end space-y-1">
	  <!-- Name header outside bubble (right-aligned) -->
	  <div class="px-1">
		<span class="font-semibold text-sm leading-none">{name}</span>
	  </div>

	  <!-- Hover wrapper for bubble and brain icon -->
	  <div class="group relative w-full">
		<!-- Message bubble -->
		<div class="p-3 rounded-lg bg-accent/30 border border-border space-y-1.5">
		  <!-- Thoughts section -->
		  {#if showThoughts && thoughts}
			<div 
			  class="p-2 bg-accent/50 rounded-md text-xs text-muted-foreground"
			  in:slide={{ duration: 200, easing: quintOut }}
			  out:slide={{ duration: 150, easing: quintOut }}
			>
			  <div class="flex items-start gap-1.5" in:fade={{ duration: 200, delay: 50 }} out:fade={{ duration: 100 }}>
				<Brain class="size-3 flex-shrink-0 mt-0.5 opacity-60" />
				<span class="flex-1">{thoughts}</span>
			  </div>
			</div>
		  {/if}

		  <!-- Message content -->
		  {#if isStreaming && !content}
			<div class="space-y-2">
			  <Skeleton class="h-3 w-full" />
			  <Skeleton class="h-3 w-full" />
			  <Skeleton class="h-3 w-3/4" />
			</div>
		  {:else if content}
			<div class="text-sm text-foreground leading-relaxed">
			  {content}
			</div>
		  {/if}
		</div>

		<!-- Brain icon below bubble (visible on hover or when active) -->
		{#if thoughts}
		  <div class="flex justify-start mt-1 px-1">
			<button 
				class="p-1 rounded hover:bg-accent transition-colors opacity-0 group-hover:opacity-100 {showThoughts ? 'opacity-100 bg-accent' : ''}"
				onclick={() => showThoughts = !showThoughts}
				aria-label={showThoughts ? "Hide thoughts" : "View thoughts"}
			>
				<Brain class="size-3.5 {showThoughts ? 'text-accent-foreground' : 'text-muted-foreground'}" />
			</button>
		  </div>
		{/if}
	  </div>
	</div>

	<!-- Avatar -->
	<div class="flex-shrink-0">
	  <Avatar.Root class="size-8">
		<Avatar.Image src={image} alt={name} />
		<Avatar.Fallback class="bg-primary text-primary-foreground text-xs">
		  {name.charAt(0).toUpperCase()}
		</Avatar.Fallback>
	  </Avatar.Root>
	</div>
  </div>

{:else if variant === 'director'}
  <!-- Director variant (omniscient narration, no attribution) -->
  <div class="flex justify-center">
	<div class="max-w-[80%] space-y-1.5">
	  <!-- Message content (borderless, no attribution) -->
	  {#if isStreaming && !content}
		<div class="space-y-2">
		  <Skeleton class="h-3 w-full" />
		  <Skeleton class="h-3 w-full" />
		  <Skeleton class="h-3 w-3/4" />
		</div>
	  {:else if content}
		<div class="text-sm text-muted-foreground leading-relaxed text-center italic">
		  {content}
		</div>
	  {/if}
	</div>
  </div>
{/if}