<script lang="ts">
	import Chat from "$lib/components/chat/Chat.svelte"
	import { ModeWatcher } from "mode-watcher"
</script>


<ModeWatcher />
<div data-tauri-drag-region class="w-full h-[28px] min-h-[28px] flex justify-center items-center text-sm font-bold select-none backdrop-opacity-0 fixed top-0 left-0 z-50 cursor-default">
	OpenStage
</div>

<main
	class="w-full h-full bg-background pt-6 p-2 select-none overflow-hidden"
>
	<Chat />
</main>
