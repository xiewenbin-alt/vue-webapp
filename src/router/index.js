import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


export default new VueRouter({
  routes: [
    // 路由重定向
    {
      path: '/',
      name: '首页',
      redirect:'/index',
      // component: index,
      component:resolve=>require(['../../src/views/index.vue'],resolve),
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/index',
      name: '首页',
      //全局加载
      // component: index,
      component:resolve=>require(['../../src/views/index.vue'],resolve),
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/Category',
      name: '分类页',
      component: resolve => require(['../../src/views/category.vue'], resolve),
      meta:{
        keepAlive:true
      }
    
    }, {
      path: '/CategoryList',
      name: '列表页',
      component:resolve=>require(['../../src/views/categoryList.vue'],resolve),
    },{
      path:'/Recom',
      name:'推荐页',
      //按需加载，可以提高加载速度
      component:resolve => require(['../../src/views/Recom.vue'], resolve),
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/Car',
      name: '购物车页',
      component: resolve => require(['../../src/views/car.vue'], resolve),
      meta:{
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/user',
      name: 'user',
      component: resolve => require(['../../src/views/user.vue'], resolve),

      meta:{
        keepAlive:true,
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    }, 
    {
      path: '/detail',
      name: '详情页',
      component: resolve => require(['../../src/views/Detail.vue'], resolve),
    },
    {
      path:'/login',
      name:'登录页',
      component: resolve => require(['../../src/views/login.vue'], resolve),
    },
    {
      path:'/reg',
      name:'注册页',
      component: resolve => require(['../../src/views/reg.vue'], resolve),
    },
    {
    path:'/regloading',
    name:'登陆跳转页',
    component:resolve => require(['../../src/public/regloading.vue'], resolve),
    }

     ]
}
,

)
