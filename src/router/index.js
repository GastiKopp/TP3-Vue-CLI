import { createRouter, createWebHistory } from "vue-router";
import FormularioView from "../views/FormularioView.vue";
import UsuariosView from "../views/UsuariosView.vue";

const routes = [
  {
    path: "/",
    name: "Formulario",
    component: FormularioView,
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: UsuariosView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
