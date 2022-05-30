import Vue from 'vue'
import Router from 'vue-router'
// import VueDemo from '@/components/VueDemo'
import Messages from '@/components/Messages'
import Elements from '@/components/Elements'
import News from '@/views/news'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: VueDemo
    // },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/element',
      name: 'element',
      component: Elements
    },
    {
      path: '/',
      name: 'news',
      component: News
    }
  ]
})
