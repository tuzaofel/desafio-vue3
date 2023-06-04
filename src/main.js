
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import './assets/main.css'

const app = createApp(App)

app.config.globalProperties.globalState = {
    "selectedPlan": 0,
}


app.use(router);

app.mount('#app')