import Vue from 'vue'
import request from 'request'
import App from './App.vue'
import router from './router'
import store from './store'
import './libs/rem.js'

import axios from 'axios';

Vue.prototype.axios = axios;


import {
  Grid,
  GridItem
} from 'vant';
import {
  Tabbar,
  TabbarItem
} from 'vant';
import {
  Swipe,
  SwipeItem
} from 'vant';
import {
  Image
} from 'vant';
import {
  Row,
  Col
} from 'vant';
import {
  Tag
} from 'vant'
import {
  Icon
} from 'vant';
import {
  Switch
} from 'vant';
import {
  Checkbox,
  CheckboxGroup
} from 'vant';
import {
  Button
} from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
import {
  SubmitBar
} from 'vant';
import {
  Dialog
} from 'vant';
import {
  Field
} from 'vant';
import {
  CellGroup
} from 'vant';
import {
  Toast
} from 'vant';


import formValidation from './public/formValidation'
Vue.prototype.formValidation = formValidation;





Vue.config.productionTip = false;

Vue.use(Tabbar).use(Field).use(Toast).use(CellGroup).use(GoodsAction).use(Button).use(Dialog).use(SubmitBar).use(GoodsActionIcon).use(GoodsActionButton).use(Checkbox).use(CheckboxGroup).use(TabbarItem).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Image).use(Row).use(Col).use(Tag).use(Icon).use(Switch);


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (!localStorage.getItem('token')) {
      next({
        path: '/login'
      })
    }
  }
  next()
})


new Vue({
  router,
  store,
  request,
  render: h => h(App)
}).$mount("#app");