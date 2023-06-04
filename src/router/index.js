
import {createRouter, createWebHistory} from "vue-router"
import Login from '../pages/Login.vue';
import Plans from '../pages/Plans.vue';
import Plan from '../pages/Plan.vue';


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
            path: "/plan",
            name: 'plan',
            component: Plan
        }
        
    ]
})

export default router;