<template>
  <div class="my">
    <m-header :title="title"></m-header>
    <div class="main">
      <div class="info">
        <img :src="user.avatar" class="avatar">
        <div class="disc">
          <h1>{{user.name}}</h1>
          <p>{{user.account}}</p>
        </div>
        <div class="detail" @click="goToDetail(user)"></div>
      </div>
      <div class="menu">
        <ul>
          <li v-for="item in menuList">
            <m-card :data="item"></m-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import MHeader from '../../base/main-header/main-header'
  import MCard from '../../base/my-card/my-card.vue'

  export default {
    data() {
      return {
        title: {
          name: '我的',
          type: 'main'
        },
        user:{
          avatar:require('./avatar3.jpeg'),
          name:'隔壁王大哥',
          account:'12345678@qq.com',
          link:'info'
        },
        menuList:[
          {
            icon:require('./my_article.png'),
            title:'我的文章',
            link:'passages'
          },
          {
            icon:require('./my_question.png'),
            title:'我的提问',
            link:'questions'
          },
            {
            icon:require('./my_answer.png'),
            title:'我的回答',
            link:'answer'
          },
            {
            icon:require('./my_collection.png'),
            title:'我的收藏',
            link:'collections'
          },
            {
            icon:require('./my_good.png'),
            title:'我的点赞',
            link:'likes'
          },
            {
            icon:require('./my_setting.png'),
            title:'设置',
            link:'settings'
          }
        ]
      }
    },
    methods:{
      goToDetail(item){
        this.$router.push({
          path:`/${item.link}`
        })
      }
    },
    components: {
      MHeader,
      MCard
    }
  }

</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'

.my
  .main
    position relative
    width 100%
    .info
      margin 5px 0
      padding 15px 25px
      font-size 0
      background-color $color-community-background
      .avatar
        display inline-block
        width 40px
        height 40px
        background-size 40px 40px
        margin-right 18px
      .disc
        display inline-block
        vertical-align top
        h1
          margin-bottom 8px
          font-size 15px
          color #444444
        p
          font-size 11px
          color #999999
    .detail
      position absolute
      top 15px
      right 31px
      background-image url('arrow_green_right.png')
      width 9px
      height 14px
      background-size 9px 14px
</style>
