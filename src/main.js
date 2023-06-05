
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index.js'
import VueTheMask from 'vue-the-mask'

import './assets/main.css'

const app = createApp(App)

app.use(store);
app.use(router);
app.use(VueTheMask)

app.mount('#app');