import {createRouter,createWebHashHistory} from "vue-router";
import Icon from "./views/icon.vue";
export const routes = [
  { path: "/icon", component: Icon, name: '图标' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;