import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
//=> 配置一级路由
const routes = [
     {
       path:'/',
       //=> 重定向
       redirect:'/Home'
     },
     {
      //=> hash路径
      name:'Home',
      path:'/Home',
      //=> 渲染组件啊啊
      component:Home,
    },
     {
      name:'Custom/:lx',
       path:'/Custom',
       component:()=>import('@/views/Custom'),
     },
     
     {
      name:'System',
       path:'/System',
       component:()=>import('@/views/System'),
     }
]

const router = new VueRouter({
  //=> 设置路由模式： hash(默认)/history
  mode:'hash',
  routes
})

export default router
