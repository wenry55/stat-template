import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyComponent from '@/components/MyComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: 'bk',
          name: 'bk',
          component: MyComponent
        }

      ]
    }
  ]
})
