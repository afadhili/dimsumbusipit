<script lang="ts">
  import "../app.css";
  import { type Snippet } from "svelte";
  import { PUBLIC_CLERK_PUBLISHABLE_KEY } from "$env/static/public";
  import { ClerkProvider } from "svelte-clerk/client";
  import { Toaster } from "svelte-sonner";
  import AppNavbar from "@/components/app-navbar.svelte";

  const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>Dimsum Bu Sipit</title>
</svelte:head>

<ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
  <Toaster />
  <AppNavbar />
  {@render children()}
</ClerkProvider>
