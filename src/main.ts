

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'


import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig({
    theme: 'genesis' // will load from CDN and inject into document head
  }))



app.mount('#app')
