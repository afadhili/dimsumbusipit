<script lang="ts">
  import Button from "@/components/ui/button/button.svelte";
  import client from "@/supabase";
  import { onMount } from "svelte";
  import { useClerkContext } from "svelte-clerk/client";

  const ctx = useClerkContext();
  let tasks: any = [];
  let taskName = "";
  let taskDescription = "";
  let userId = ctx.auth.userId;

  onMount(async () => {
    const { error, data } = await client
      .from("tasks")
      .select("*")
      .eq("user_id", userId);
    if (error) {
      console.error("Error fetching tasks:", error);
    } else {
      tasks = data;
    }
  });

  async function handleCreateTask() {
    const newTask = {
      name: taskName,
      description: taskDescription,
      user_id: userId,
    };

    const { data, error } = await client
      .from("tasks")
      .insert([newTask])
      .select("*");

    if (error) {
      console.error("Error creating task:", error);
    } else {
      tasks = [...tasks, data[0]];
      taskName = "";
      taskDescription = "";
    }
  }
</script>

<div
  class="flex flex-col gap-4 p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-md my-6"
>
  <input
    type="text"
    name="name"
    placeholder="Task Name"
    class="p-2 border border-gray-300 rounded-md"
    bind:value={taskName}
  />
  <input
    type="text"
    name="description"
    placeholder="Task Description"
    class="p-2 border border-gray-300 rounded-md"
    bind:value={taskDescription}
  />

  <Button onclick={handleCreateTask} type="submit">Create Task</Button>
</div>

{#if tasks.length > 0}
  <div
    class="flex flex-col gap-4 p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-md my-6"
  >
    {#each tasks as task}
      <div class="p-4 border border-gray-300 rounded-md">
        <h2 class="text-lg font-semibold">{task.name}</h2>
        <p>{task.description}</p>
      </div>
    {/each}
  </div>
{:else}
  <p class="text-center">No tasks available.</p>
{/if}
