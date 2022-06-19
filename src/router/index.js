import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:'/',
        name: 'home',
        component: VacationPicker,
    },
    {
        path:'/add',
        name: 'add',
        component: AddCountry,
    },

]

const router = createRouter({
    history:createWebHistory(process.env.Base_URL), routes})

import VacationPicker from "@/components/vacationPicker";
import AddCountry from "@/components/AddCountry";
export default router;