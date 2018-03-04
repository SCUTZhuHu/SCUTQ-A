import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/hello'
import HelloWorld from '@/components/helloworld/HelloWorld'
import Question from '@/components/question/question'
import Compass from '@/components/compass/compass'
import Article from '@/components/article/article'
import News from '@/components/news/news'
import Comment from '@/components/comment/comment'
import Post from '@/components/post/post'
import PostComment from '@/components/postComment/postComment'
import Search from '@/components/search/search'
import Result from '@/components/result/result'
import Index from '@/components/index/index'

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
    { path:'/question', component:Question },
    { path:'/article', component:Article },
    { path:'/compass', component:Compass },
    { path:'/news', component:News },
    { path:'/comment', component: Comment},
    { path:'/post', component: Post},
    { path:'/postComment', component: PostComment },
    { path:'/search', component: Search},
    { path:'/result', component: Result},
    { path:'/index', component: Index},
  ]
})
