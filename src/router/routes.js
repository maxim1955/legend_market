const routes = [
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '/main', component: () => import('pages/v-IndexPage.vue')},
      {path: '/catalog',props:true, component: () => import('pages/v-Catalog.vue')},
      {path: '/basket',props:true, component: () => import('pages/v-Basket.vue')},
      {path: '/about', component: () => import('pages/v-About.vue')},
    ]
  },

  {
    path: '/',
    component: () => import('layouts/FirsLayouts.vue'),
    children: [
      {path: '/', component: () => import('pages/v-SignIn.vue')},
      {path: '/loggedin', component: () => import('pages/v-LoggedIn.vue')}
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
