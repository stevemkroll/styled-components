import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/main.scss"
import "@fortawesome/fontawesome-free/js/all.js"

// BUTTONS
import btnPrimary from "@/components/button/btnPrimary"
import btnSecondary from "@/components/button/btnSecondary"
import btnTertiary from "@/components/button/btnTertiary"
import btnQuaternary from "@/components/button/btnQuaternary"

Vue.component('btn-primary', btnPrimary)
Vue.component('btn-secondary', btnSecondary)
Vue.component('btn-tertiary', btnTertiary)
Vue.component('btn-quaternary', btnQuaternary)

// TAGS
import tagSuccess from "@/components/tag/tagSuccess"
import tagInfo from "@/components/tag/tagInfo"
import tagWarning from "@/components/tag/tagWarning"
import tagError from "@/components/tag/tagError"

Vue.component('tag-success', tagSuccess)
Vue.component('tag-info', tagInfo)
Vue.component('tag-warning', tagWarning)
Vue.component('tag-error', tagError)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')