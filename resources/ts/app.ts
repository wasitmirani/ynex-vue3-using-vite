import { createApp } from "vue";
// import './registerServiceWorker'
import { createPinia } from 'pinia'
import App from "./vue/App.vue";
import router from "./router";

const pinia = createPinia()
const app = createApp(App);
app.use(pinia)
app.use(router);
app.mount('#app');





