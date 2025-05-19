<script lang="ts">
  import Dashboard from "@lucide/svelte/icons/grid";
  import Inbox from "@lucide/svelte/icons/inbox";
  import Products from "@lucide/svelte/icons/package";
  import Orders from "@lucide/svelte/icons/shopping-cart";
  import Branches from "@lucide/svelte/icons/box";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  const items = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: Dashboard,
    },
    {
      title: "Products",
      url: "/admin/products",
      icon: Products,
    },
    {
      title: "Branches",
      url: "/admin/branches",
      icon: Branches,
    },
    {
      title: "Orders",
      url: "/admin/orders",
      icon: Orders,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
  ];
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel>Dimsum bu Sipit</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each items as item (item.title)}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <a href={item.url} {...props} title={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>
