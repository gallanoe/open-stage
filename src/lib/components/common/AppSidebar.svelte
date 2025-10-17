<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import ThemeToggle from "$lib/components/common/ThemeToggle.svelte"
  import HomeIcon from "@lucide/svelte/icons/home"
  import MessageSquareIcon from "@lucide/svelte/icons/message-square"
  import BotIcon from "@lucide/svelte/icons/bot"
  import { useNavigationStore } from "$lib/store/navigation.svelte"
  
  const navigation = useNavigationStore();

  const items = [
    {
      label: "Home",
      icon: HomeIcon,
      page: "home" as const,
      onClick: () => navigation.navigateTo("home")
    },
    {
      label: "Chat",
      icon: MessageSquareIcon,
      page: "chat" as const,
      onClick: () => navigation.navigateTo("chat")
    },
    {
      label: "Agents",
      icon: BotIcon,
      page: "agents" as const,
      onClick: () => navigation.navigateTo("agents")
    },
  ]
</script>

<Sidebar.Root collapsible="icon" variant="inset" class="absolute h-full" >
	<Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.label)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a 
                    onclick={item.onClick} 
                    class:bg-accent={navigation.currentPage === item.page}
                    {...props}
                  >
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
