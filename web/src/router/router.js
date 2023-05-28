import { createRouter, createWebHashHistory } from 'vue-router'
import AnalyseView from "@/views/AnalyseView.vue";
import DataView from "@/views/DataView.vue";
import HomeView from "@/views/HomeView.vue";
import SuggestView from "@/views/SuggestView.vue";
import TestView from "@/views/TestView.vue"

const routes = [
    {
        path: '',
        // redirect重定向
        redirect: '/home'
    },
    {
        path: '/analyse',
        name: 'analyse',
        component: AnalyseView
    },
    {
        path: '/data',
        name: 'data',
        component: DataView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/suggest',
        name: 'suggest',
        component: SuggestView
    },
    {
        path:'/test',
        name:'test',
        component: TestView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router