import {createRouter,createWebHistory,RouteRecordRaw,} from "vue-router";

import Home from "./vue/pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home page",
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
