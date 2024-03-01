

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'
import router from './router'

import {Modal} from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig({
    theme: 'genesis' // will load from CDN and inject into document head
  }))

app.use(Modal)

app.mount('#app')
