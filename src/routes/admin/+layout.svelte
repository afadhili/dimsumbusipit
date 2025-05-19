<script lang="ts">
  import { SignedIn, SignedOut, SignIn, UserButton } from "svelte-clerk/client";
  import { type Snippet } from "svelte";
  import * as Sidebar from "$lib/components/ui/sidebar";
  import AppSidebar from "$lib/components/ui/app-sidebar.svelte";

  const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>Dimsum bu Sipit | Admin</title>
</svelte:head>

<SignedIn>
  <Sidebar.Provider>
    <AppSidebar />
    <main class="w-full min-h-screen">
      <nav
        class="flex items-center justify-between w-full px-4 py-2 bg-background border-b shadow-sm gap-x-4"
      >
        <Sidebar.Trigger title="Toggle sidebar" />
        <UserButton />
      </nav>
      {@render children()}
    </main>
  </Sidebar.Provider>
</SignedIn>
<SignedOut>
  <div class="flex flex-col items-center justify-center h-screen">
    <SignIn redirectUrl="/admin" />
  </div>
</SignedOut>
