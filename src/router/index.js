import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ParticleEffects from "../views/specialEffects/particleEffects.vue"
import CodeRainEffects from "../views/specialEffects/codeRainEffects.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/particleEffects",
    name: "particleEffects",
    component: ParticleEffects
  },
  {
    path: "/codeRainEffects",
    name: "codeRainEffects",
    component: CodeRainEffects
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
