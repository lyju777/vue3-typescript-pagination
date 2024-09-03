import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


// TypeScript with Vue 3
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: ()=> import('@pages/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
