<script lang="ts">
  import type { Snippet } from "svelte";
  import "../app.css";

  const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>Dimsum Bu Sipit</title>
</svelte:head>
{@render children()}
