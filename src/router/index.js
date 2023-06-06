
import {createRouter, createWebHistory} from "vue-router"
import Login from '../pages/Login.vue';
import Plans from '../pages/Plans.vue';
import SingUp from '../pages/SingUp.vue';
import Welcome from '../pages/Welcome.vue';
import Help from '../pages/Help.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'login',
            component: Login
        },
        {
            path: "/plans",
            name: 'plans',
            component: Plans
        },
        {
            path: "/singup",
            name: 'singup',
            component: SingUp,
        },
        {
            path: "/welcome",
            name: 'welcome',
            component: Welcome,
        },
        {
            path: "/help",
            name: 'help',
            component: Help,
        },
    ]
})

export default router;