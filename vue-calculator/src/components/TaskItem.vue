<template>
  <li class="task-item">
    <span class="title">{{ task.title }}</span>
    <span class="status"> در حال انجام </span>
  </li>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style>
.task-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.task-item:hover {
  background: #f5f5f5;
  transform: scale(1.01);
}

.title {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
}

.status {
  font-size: 0.9rem;
  font-weight: bold;
  color: #c70053;
  transition: color 0.2s;
}

.status.done {
  color: green;
}
</style>
