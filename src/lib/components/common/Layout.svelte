<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js"
	import AppSidebar from "$lib/components/common/AppSidebar.svelte"
</script>


<Sidebar.Provider>
	<div class="flex flex-1">
		<AppSidebar />
    <Sidebar.Trigger />
    <main
      class="w-full h-full bg-background pt-6 p-2 select-none overflow-hidden"
    >
    </main>
	</div>
</Sidebar.Provider>
