<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import Layout from '$lib/components/common/Layout.svelte';
</script>

<ModeWatcher />
<div class="h-full w-full flex flex-col">
	<div
		data-tauri-drag-region
		class="flex-none flex h-[28px] min-h-[28px] w-full cursor-default items-center justify-center text-sm font-bold select-none bg-sidebar"
	>
		OpenStage
	</div>
	<div class="grow min-h-0 h-[calc(100vh-28px)] max-h-[calc(100vh-28px)]">
		<Layout/>
	</div>
</div>
<!-- <div class="h-full w-full flex flex-col">
	<Layout/>
</div> -->
