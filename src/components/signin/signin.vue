<template>
  <div class="signin">
    <m-header :title="title"></m-header>
    <div class="main">
      <form action="post">
        <div class="account">
          <span class="title">帐号</span>
          <input type="text" class="text">
        </div>
        <div class="password">
          <span class="title">密码</span>
          <input type="password" class="text">
        </div>
        <button>登录</button>
      </form>
      <router-link to="/findpsw">忘记密码？</router-link>
      <div class="signup">
          还没注册？点击<router-link to="/signup">注册</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import MHeader from '../../base/main-header/main-header'

export default {
    data(){
        return{
            title:{
                name:'登录',
                type:'signin'
            }
        }
    },
  components:{
      MHeader
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'

.signin
    position fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    font-size 12px
    color #282828
    background: #ffffff
    .main
        margin-top 182px
        text-align center
        .account
            .text
                width 200px
                height 15px
                padding 1px
                border-bottom solid 2px #cccccc
        .password
            margin-top 21px
            .text
                width 200px
                height 15px
                padding 1px                
                border solid 2px #cccccc
        button
            display inline-block //父元素text-align center，子元素display inline-block即可实现水平居中
            width 100px
            height 30px
            border-radius 15px
            margin 45px auto 9px auto
            text-align center 
            background-color $color-theme
            color #ffffff
        a
            color $color-theme
            text-decoration underline
        .signup
            margin-top 10px
</style>
