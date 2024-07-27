import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = []
const files: Record<string, any> = import.meta.globEager('./pages/**/*.route.ts')

for (const key in files) {
	routes.push(files[key].default)
}

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
