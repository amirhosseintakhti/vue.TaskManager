import { createApp } from "vue";
import App from "./App.vue";
import TaskList from "./components/TaskList.vue";
import TaskItem from "./components/TaskItem.vue";
import NewTask from "./components/NewTask.vue"


const app = createApp(App);
app.component("task-list", TaskList);
app.component('task-item',TaskItem);
app.component('new-task' ,NewTask);

app.mount('#app')