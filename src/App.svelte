<script lang="ts">
	import Chat from "@/components/chat/Chat.svelte";
</script>

<div data-tauri-drag-region class="w-full h-[28px] min-h-[28px] flex justify-center items-center text-sm font-bold backdrop-opacity-0 absolute top-0 left-0">
	OpenStage
</div>
<main
	class="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-4 p-2 select-none overflow-hidden"
>
	<Chat />
</main>
