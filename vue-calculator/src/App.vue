<template>
  <div>
    <h1>لیست کارها</h1>
      <task-list :tasks="tasks"></task-list>
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
};
</script>

<style></style>
