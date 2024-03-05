

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'



import App from './App.vue'
import router from './router'

import {Modal} from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(plugin, defaultConfig)

app.use(Modal)

app.use(Vue3Toastify, {
  autoClose: 2000,
} as ToastContainerOptions);

app.mount('#app')
