import App from './App.vue'

const routes = [
  { path: '/:select', component: App, },
  { path: '/', redirect: '/all' },
]

export default routes