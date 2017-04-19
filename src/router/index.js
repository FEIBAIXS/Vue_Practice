import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Index from 'modules/Index'
import ShowDemo from 'modules/ShowDemo'
import Demo1 from 'modules/Demo1'
import Demo2 from 'modules/Demo2'
import ShowDemoIndex from 'modules/ShowDemoIndex'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      title: 'Index',
      component: Index
    },
    {
      path: '/ShowDemo',
      name: 'ShowDemo',
      title: 'ShowDemo',
      component: ShowDemo,
      children: [
        {
          path: '',
          component: ShowDemoIndex
        },
        {
          path: '/ShowDemo/Demo1',
          component: Demo1
        },
        {
          path: '/ShowDemo/Demo2',
          component: Demo2
        }
      ]
    },
    {
      path: '/Hello',
      name: 'Hello',
      title: 'title',
      component: Hello
    }
  ]
})

export default router
