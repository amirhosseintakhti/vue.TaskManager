<template>
  <div>
    <h1>لیست کارها</h1>
    <task-list :tasks="tasks" @toggle-done="toggleDoneStatus"></task-list>
    <new-task @inp-task="updateTask"></new-task>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "خرید نان",
          done: false,
        },
        {
          id: 2,
          title: "کلاس زبان",
          done: false,
        },
      ],
    };
  },
  methods: {
    toggleDoneStatus(taskId) {
      const taskDone = this.tasks.find((task) => task.id === taskId);
      taskDone.done = !taskDone.done;
    },
    updateTask(newTask){
      this.tasks.push(newTask);
    }
  },
};
</script>

<style></style>
