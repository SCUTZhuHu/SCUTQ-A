import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/hello'
import HelloWorld from '@/components/helloworld/HelloWorld'
import Question from '@/components/question/question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path:'/helloworld',
      component:HelloWorld
    },
    {
      path:'/question',
      component:Question
    }
  ]
})
