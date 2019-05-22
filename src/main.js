import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/main.scss"
import "@fortawesome/fontawesome-free/js/all.js"

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate);

// BUTTONS
import btnSuccess from "@/components/button/btnSuccess"
import btnInfo from "@/components/button/btnInfo"
import btnWarning from "@/components/button/btnWarning"
import btnError from "@/components/button/btnError"

Vue.component('btn-success', btnSuccess)
Vue.component('btn-info', btnInfo)
Vue.component('btn-warning', btnWarning)
Vue.component('btn-error', btnError)

// TAGS
import tagSuccess from "@/components/tag/tagSuccess"
import tagInfo from "@/components/tag/tagInfo"
import tagWarning from "@/components/tag/tagWarning"
import tagError from "@/components/tag/tagError"

Vue.component('tag-success', tagSuccess)
Vue.component('tag-info', tagInfo)
Vue.component('tag-warning', tagWarning)
Vue.component('tag-error', tagError)

import inputUser from "@/components/input/inputUser"
import inputPassword from "@/components/input/inputPassword"

Vue.component('input-user', inputUser)
Vue.component('input-password', inputPassword)

import pickerColorSuccess from "@/components/pickers/pickerColorSuccess"
import pickerColorInfo from "@/components/pickers/pickerColorInfo"
import pickerColorText from "@/components/pickers/pickerColorText"

Vue.component('picker-color-success', pickerColorSuccess)
Vue.component('picker-color-info', pickerColorInfo)
Vue.component('picker-color-text', pickerColorText)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')