import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _716e8fd7 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _6aca0030 = () => interopDefault(import('..\\pages\\skills.vue' /* webpackChunkName: "pages/skills" */))
const _07374c33 = () => interopDefault(import('..\\pages\\skills\\multimedia.vue' /* webpackChunkName: "pages/skills/multimedia" */))
const _b559a308 = () => interopDefault(import('..\\pages\\skills\\script.js' /* webpackChunkName: "pages/skills/script" */))
const _76308ff6 = () => interopDefault(import('..\\pages\\skills\\datamodels\\stephen.js' /* webpackChunkName: "pages/skills/datamodels/stephen" */))
const _4f7d65ed = () => interopDefault(import('..\\pages\\expertise\\_expertise.vue' /* webpackChunkName: "pages/expertise/_expertise" */))
const _ddb32ac8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _e1206d58 = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/nuxtapp/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _716e8fd7,
    name: "about"
  }, {
    path: "/skills",
    component: _6aca0030,
    name: "skills",
    children: [{
      path: "multimedia",
      component: _07374c33,
      name: "skills-multimedia"
    }, {
      path: "script",
      component: _b559a308,
      name: "skills-script"
    }, {
      path: "datamodels/stephen",
      component: _76308ff6,
      name: "skills-datamodels-stephen"
    }]
  }, {
    path: "/expertise/:expertise?",
    component: _4f7d65ed,
    name: "expertise-expertise"
  }, {
    path: "/",
    component: _ddb32ac8,
    name: "index"
  }, {
    path: "/:slug",
    component: _e1206d58,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
