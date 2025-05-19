<script lang="ts">
  import Button from "@/components/ui/button/button.svelte";
  import client from "@/supabase";
  import { onMount } from "svelte";
  import { useClerkContext } from "svelte-clerk/client";
  import Thrash from "@lucide/svelte/icons/trash-2";
  import { toast } from "svelte-sonner";

  const ctx = useClerkContext();
  const db = client(ctx.session?.getToken());

  let tasks: any = [];
  let taskName = "";
  let taskDescription = "";

  onMount(async () => {
    const { error, data } = await db.from("tasks").select("*");
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
    };

    const { data, error } = await db
      .from("tasks")
      .insert([newTask])
      .select("*");

    if (error) {
      toast.error("Failed to create task");
      console.error("Error creating task:", error);
    } else {
      toast.success("Task created successfully");
      tasks = [...tasks, data[0]];
      taskName = "";
      taskDescription = "";
    }
  }

  async function handleDeleteTask(taskId: string) {
    const { error } = await db.from("tasks").delete().eq("id", taskId);

    if (error) {
      toast.error("Failed to delete task");
      console.error("Error deleting task:", error);
    } else {
      toast.success("Task deleted successfully");
      tasks = tasks.filter((task: any) => task.id !== taskId);
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
      <div class="p-4 border border-gray-300 rounded-md relative">
        <h2 class="text-lg font-semibold">{task.name}</h2>
        <p>{task.description}</p>

        <Button
          variant="destructive"
          size="sm"
          class="absolute top-2 right-2"
          onclick={() => handleDeleteTask(task.id)}
          title="Delete Task"><Thrash /></Button
        >
      </div>
    {/each}
  </div>
{:else}
  <p class="text-center">No tasks available.</p>
{/if}
