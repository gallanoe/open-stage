<script lang="ts">
	import { ModeWatcher } from "mode-watcher"
	import Page from "$lib/components/common/Page.svelte"
</script>


<ModeWatcher />
<div data-tauri-drag-region class="w-full h-[28px] min-h-[28px] flex justify-center items-center text-sm font-bold select-none backdrop-opacity-0 cursor-default">
	OpenStage
</div>
<Page />