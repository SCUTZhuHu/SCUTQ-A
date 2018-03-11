import Vue from 'vue'
import Router from 'vue-router'
import Zhihu from '../components/zhihu/zhihu.vue'
import Community from '../components/community/community.vue'
import Message from '../components/message/message.vue'
import My from '../components/my/my.vue'
import Wall from '../components/wall/wall.vue'
import LookforSb from '../components/lookfor-sb/lookfor-sb.vue'
import LookforSth from '../components/lookfor-sth/lookfor-sth.vue'
import Info from '../components/info/info.vue'
import Passages from '../components/passages/passages.vue'
import Questions from '../components/questions/questions.vue'
import Answers from '../components/answers/answers.vue'
import Collections from '../components/collections/collectons.vue'
import Likes from '../components/likes/likes.vue'
import Settings from '../components/settings/settings.vue'
import SignIn from '../components/signin/signin.vue'
import SignUp from '../components/signup/signup.vue'
import FindPsw from '../components/findpsw/findpsw.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/zhihu',
      component: Zhihu
    },
    {
      path:'/community',
      component:Community,
      children:[
        {
          path:'/',
          redirect:'/community/wall'
        },
        {
          path:'/community/wall',
          component:Wall,
        },
        {
          path:'/community/lookforsb',
          component:LookforSb
        },
        {
          path:'/community/lookforsth',
          component:LookforSth
        }
      ]
    },
    {
      path:'/message',
      component:Message
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'/info',
      component:Info
    },
    {
      path:'/passages',
      component:Passages
    },
    {
      path:'/questions',
      component:Questions
    },
    {
      path:'/answer',
      component:Answers
    },
    {
      path:'/collections',
      component:Collections
    },
    {
      path:'/likes',
      component:Likes
    },
    {
      path:'/settings',
      component:Settings
    },
    {
      path:'/signin',
      component:SignIn
    },
    {
      path:'/signup',
      component:SignUp
    },
    {
      path:'/findpsw',
      component:FindPsw
    }
  ]
})
