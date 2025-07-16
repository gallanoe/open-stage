<script lang="ts">
	import HelloWorld from '$lib/components/HelloWorld.svelte';
</script>

<div data-tauri-drag-region class="w-full h-[28px] min-h-[28px] flex justify-center items-center text-sm font-bold backdrop-opacity-0 absolute top-0 left-0">
	OpenStage
</div>
<main
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 select-none overflow-hidden"
>
	<HelloWorld />
</main>
