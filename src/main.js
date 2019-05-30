// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import Mint from 'mint-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Mint)
Vue.use(ElementUI)
Vue.config.productionTip = false

import { Icon } from 'vux'
import { Group } from 'vux'
import { XInput } from 'vux'
import { XButton } from 'vux'
import { Badge } from 'vux'
import { Cell } from 'vux'
import { Grid, GridItem } from 'vux'
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'

Vue.component('swipeout', Swipeout)
Vue.component('swipeout-item', SwipeoutItem)
Vue.component('swipeout-button', SwipeoutButton)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('cell', Cell)
Vue.component('badge', Badge)
Vue.component('x-button', XButton)
Vue.component('x-input', XInput)
Vue.component('group', Group)
Vue.component('icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
