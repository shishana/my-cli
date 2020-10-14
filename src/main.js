/*
 * @Author: your name
 * @Date: 2019-11-11 09:35:03
 * @LastEditTime: 2019-11-25 09:53:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \dpa_web\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import api from './http/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import '../static/theme/index.css'
import '../static/iconfont/iconfont'
import '../static/iconfont/iconfont.css'

import Admin from './layouts/Admin.vue'
import OnlyHeader from './layouts/OnlyHeader.vue'
import FullPage from './layouts/FullPage.vue'
import './styles/index.scss'
import './utils/el-loading'
import msgMnger from './msg-mnger/index.js'
import login from './modules/login/index'
import regulationsContrast from './modules/regulations-contrast/index'

import 'jsplumb/dist/js/jsplumb.js'
import 'jsplumb/css/jsplumbtoolkit-defaults.css'
import './utils/htight-light'
const batchImportModule = function (modules) {
  modules.forEach(element => {
    Vue.use(element, { $router: router, $store: store })
  })
}

Vue.config.productionTip = false
Vue.use(api)
Vue.use(ElementUI)
Vue.use(msgMnger)
batchImportModule([login, regulationsContrast])

axios.defaults.headers.common['Pragma'] = 'no-cache'

Vue.component('admin-layout', Admin)
Vue.component('onlyHeader-layout', OnlyHeader)
Vue.component('fullPage-layout', FullPage)

// Vue.component('apply-model-bot', () => import('@/modules/platform/components/detail/bot-type/apply-model-bot.vue'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
