import { createApp } from 'vue'
import 'bootstrap'
import App from './App.vue'
import i18n from './i18n'
import { createMetaManager } from "vue-meta";

const metaManager = createMetaManager();

createApp(App)
    .use(i18n)
    .use(metaManager)
    .mount('#app')
