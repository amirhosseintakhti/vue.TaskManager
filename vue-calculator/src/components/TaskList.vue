<template>
    <ul class="task-list">
        <task-item v-for="task in tasks" :key="task.id" :task="task"></task-item>
    </ul>

</template>

<script>
export default{
    props:['tasks'],
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