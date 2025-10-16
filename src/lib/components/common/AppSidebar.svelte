<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import ThemeToggle from "$lib/components/common/ThemeToggle.svelte"
  import HomeIcon from "@lucide/svelte/icons/home"

  const items = [
    {
      label: "Home",
      icon: HomeIcon,
      onClick: () => {
        console.log("Home")
      }
    },
  ]
</script>

<Sidebar.Root collapsible="icon" variant="floating" class="mt-[24px] h-[calc(100vh-24px)]">
	<Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.label)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a onclick={item.onClick} {...props}>
                  <item.icon />
                  <span>{item.label}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Footer/>
</Sidebar.Root>
