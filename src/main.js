import './assets/main.css'
import router from './routes/rootRoutes'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

 
const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
