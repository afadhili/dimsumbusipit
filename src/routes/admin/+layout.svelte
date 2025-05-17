<script lang="ts">
  import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignIn,
  } from "svelte-clerk/client";
  import { PUBLIC_CLERK_PUBLISHABLE_KEY } from "$env/static/public";
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>Dimsum bu Sipit | Admin</title>
</svelte:head>

<ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
  <SignedIn>
    {@render children()}
  </SignedIn>
  <SignedOut>
    <div class="flex flex-col items-center justify-center h-screen">
      <SignIn redirectUrl="/admin" />
    </div>
  </SignedOut>
</ClerkProvider>
