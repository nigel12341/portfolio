import { createApp } from 'vue'
import 'bootstrap'
import App from './App.vue'
import i18n from './i18n'


createApp(App)
    .use(i18n)
    .mount('#app')
