<template>
  <li class="task-item">
    <span class="title">{{ task.title }}</span>
    <span class="status" :class="{done:task.done}">{{ task.done ? 'انجام شد' : 'در حال انجام' }}</span>
    <button class="toggle-status-btn" @click="toggleDone">تغییر وضعیت</button>
  </li>
</template>

<script>
export default {
  props: ["task"],
  methods:{
    toggleDone(){
        this.$emit('toggle-done',this.task.id)
    }
  },
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
.toggle-status-btn{
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #bbb;
  border-radius: 6px;
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}
.toggle-status-btn:hover {
  background-color: #e0e0e0;
  color: #000;
}
</style>
