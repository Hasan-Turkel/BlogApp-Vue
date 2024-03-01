

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'
import router from './router'

import {Modal} from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig({
    theme: 'genesis' // will load from CDN and inject into document head
  }))

app.use(Modal)

app.use(Vue3Toastify, {
  autoClose: 2000,
} as ToastContainerOptions);

app.mount('#app')
