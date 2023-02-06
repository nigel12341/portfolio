import { createApp } from 'vue'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

createApp(App)
    .use(router)
    .use(BootstrapIconsPlugin)
    .mount('#app')
