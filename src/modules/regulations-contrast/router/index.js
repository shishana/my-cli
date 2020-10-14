import $api from '@/http/interface'

// 路由守卫
const beforeEnter = (to, from, next) => {
  let token = window.localStorage.getItem('user-token')
  if (!token) {
    window.location.href = $api.oauthPath()
    return
  }
  next()
}
const routes = [
  {
    path: '/regulations-contrast',
    name: 'regulations-contrast',
    redirect: '/regulations-contrast/index',
    meta: { layout: 'admin', title: '法规对比' },
    component: () => import('@/modules/regulations-contrast/views/regulations-contrast.vue'),
    children: [
      {
        path: 'index',
        name: 'regulations-contrast-index',
        meta: { layout: 'admin', title: '' },
        beforeEnter: beforeEnter,
        component: () => import('@/modules/regulations-contrast/views/regulations-contrast-index.vue')
      }
    ]
  }
]

function mount () {
  this.$router.addRoutes(routes)
}

export default {
  mount
}
