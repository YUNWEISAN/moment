import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ParticleEffects from "../views/specialEffects/particleEffects.vue"
import CodeRainEffects from "../views/specialEffects/codeRainEffects.vue"
import IntroductoryExample from "../views/echarts/introductoryExample.vue"
import TrafficStatistics from "../views/echarts/trafficStatistics.vue"
import BrokenLineDiagram from "../views/echarts/brokenLineDiagram.vue"
import Dashboard from "../views/echarts/dashboard.vue"
import TopologicalGraph from "../views/echarts/topologicalGraph.vue"
import OrgChartOne from "../views/orgChart/orgChartOne.vue"



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
        path: "/introductoryExample",
        name: "introductoryExample",
        component: IntroductoryExample
    },
    {
        path: "/trafficStatistics",
        name: "trafficStatistics",
        component: TrafficStatistics
    },

    {
        path: "/brokenLineDiagram",
        name: "brokenLineDiagram",
        component: BrokenLineDiagram
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/topologicalGraph",
        name: "topologicalGraph",
        component: TopologicalGraph
    },
    {
        path: "/orgChartOne",
        name: "orgChartOne",
        component: OrgChartOne
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
