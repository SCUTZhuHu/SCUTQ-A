<template>
  <div class="psw">
      <m-header :title="title"></m-header>
      <form action="post">
          <div class="main">
           <div class="info">
          <span>手机号</span>
          <div class="content">
            <input type="text">
          </div>
        </div> 
         <div class="info">
          <span>密码</span>
          <div class="content">
            <input type="password">
          </div>
        </div>
        <div class="info">
          <span>确认密码</span>
          <div class="content">
            <input type="password">
          </div>
        </div>
          <div class="info">
          <span>验证码</span>
          <div class="content">
            <input id="phone" type="text">
            <div class="button-1" v-if="sendAuthCode" @click="getAuthCode">获取验证码</div>
             <div class="button-2" v-if="!sendAuthCode">
                 <div class="auth_text">{{auth_time}} </div> 秒后重新发送
            </div>
          </div>
        </div>
        <div class="confirm">
          <button>找回密码</button>
        </div>
        </div>
      </form>
  </div>
</template>

<script>
import MHeader from '../../base/main-header/main-header'

export default {
    data(){
        return{
            title:{
                name:'找回密码',
                type:'findpsw'
            },
            sendAuthCode:true,
            auth_time:0
        }
    },
     methods:{
         getAuthCode() {
            this.sendAuthCode = false;
            this.auth_time = 60;
            var auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time<=0){
                    this.sendAuthCode = true;
                    clearInterval(auth_timetimer);
                }
            }, 1000);
        }
    },
  components:{
      MHeader
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'

.psw
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
        position relative
        margin-top 102px
        .info
            margin-bottom 20px
            height 21px
            line-height 21px
            .content
                position relative
                left 110px
                input 
                    height 15px
                    width 200px
                    border solid 1px #cccccc
                #phone
                    width 123px
                .button-1 
                    display inline-block 
                    width 80px
                    height 21px
                    border-radius 10px
                    margin-left 3px
                    text-align center 
                    font-size 10px
                    background-color $color-theme
                    color #ffffff
                .button-2
                    display inline-block 
                    margin-left 3px
                    text-align center 
                    font-size 10px
                    .auth_text
                        display inline-block
                        color $color-theme
            span
                position absolute
                right 276px 
                margin-right 15px
        .confirm
            margin-top 48px
            text-align center
            button 
                display inline-block //父元素text-align center，子元素display inline-block即可实现水平居中
                width 100px
                height 30px
                border-radius 15px
                margin 45px auto 9px auto
                text-align center 
                background-color $color-theme
                color #ffffff
</style>
