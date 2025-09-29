// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './style.css'; // Make sure your Tailwind CSS is imported here

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.mount('#app');


