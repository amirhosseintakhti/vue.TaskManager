<template>
    <ul class="task-list">
        <task-item v-for="task in tasks" :key="task.id" :task="task" @toggle-done="$emit('toggle-done' , $event)" ></task-item>
    </ul>

</template>

<script>
export default{
    props:['tasks'],
    emits:['toggle-done']
}
</script>

<style>
.task-list {
  list-style: none;
  padding: 0;
  margin: 2rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>