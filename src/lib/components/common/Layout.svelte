<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/common/AppSidebar.svelte';
	import { useNavigationStore } from '$lib/store/navigation.svelte';

	// Import your page components
	import Chat from '$lib/components/chat/Chat.svelte';
	import Agents from '$lib/components/agents/Agents.svelte';
	// Add other page components as needed

	const navigation = useNavigationStore();

	// Map pages to components
	const pageComponents = {
		home: null, // or create a Home component
		chat: Chat,
		agents: Agents,
		settings: null // or create a Settings component
	};

	const currentComponent = $derived(pageComponents[navigation.currentPage]);
</script>

<Sidebar.Provider class="relative h-full min-h-auto">
	<AppSidebar />
	<Sidebar.Inset>
		<Sidebar.Trigger />
		<main class="h-full w-full">
			{#if currentComponent}
				{@const Component = currentComponent}
				<Component />
			{:else}
				<div class="flex h-full items-center justify-center">
					<p>Page not found</p>
				</div>
			{/if}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
