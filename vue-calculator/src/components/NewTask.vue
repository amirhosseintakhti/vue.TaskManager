<template>
  <form @submit.prevent="submitForm" class="new-task-form">
    <label for="task">تسک جدید</label>
    <input type="text" name="task" v-model="newTask.title" />
    <button type="submit">افزودن</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
  
</template>

<script>
export default {
  emits: ["inp-task"],

  data() {
    return {
      newTask: {
        id: new Date().toISOString(),
        title: " ",
        done: false,
      },
      errorMessage:''
    };
  },
  methods: {
    submitForm() {
      if (this.newTask.title!== " ") {
        this.$emit("inp-task", this.newTask);
        this.newTask = {
          id: " ",
          title: " ",
          done: false,
        };
        this.errorMessage=' ';
      }else{
        this.errorMessage = 'عنوان تسک نمی‌تواند خالی باشد!';
      }
    },
  },
};
</script>
<style>
.new-task-form {
  background-color: #ffffff;
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.new-task-form label {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
}

.new-task-form input {
  padding: 0.7rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease;
}

.new-task-form input:focus {
  border-color: #c70053;
}

.new-task-form button {
  background-color: #c70053;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.new-task-form button:hover {
  background-color: #e24d8b;
}

.error {
  color: #c70053;
  font-size: 0.9rem;
  text-align: center;
}


</style>