<template>
  <div class="settings">
       <m-header :title="title"></m-header>
      <ul>
          <li v-for="(item,index) in this.title.setItem">
              <d-card :data="item"></d-card>
          </li>
      </ul>
      <div class="sign" @click="toggleSign">
        <span v-if="signIn" class="text-1">退出登录</span>
        <span v-if="!signIn" class="text-2">登录</span>
      </div>
      <p-box :data="title.type" v-if="(!title.normal) && signIn" @selectConfirm="confirm"
            @selectCancel="cancel"></p-box>     
  </div>
</template>

<script>
import MHeader from '../../base/main-header/main-header'
import DCard from '../../base/detail-card/detail-card'
import PBox from '../../base/popup-box/popup-box'
import {mapGetters,mapMutations} from 'vuex'

export default {
  data(){
      return{
          title:{
             name:'设置',
             type:'settings',
             setItem:['帐号与安全','消息提醒','关于平台'],
             normal:true
          }
      }
  },
  computed:{
      ...mapGetters([
          'signIn'
      ])
  },
  methods:{
      toggleSign(){
        this.title.normal = false
        if(!this.signIn){
           this.$router.push({
              path:'/signin'
          }) 
        }
      },
      cancel(){
          this.title.normal = true
      },
      confirm(){
          this.setSignIn(false)
      },
      ...mapMutations({
          setSignIn:'SET_SIGN_IN'
      })
  },
  components:{
      DCard,
      MHeader,
      PBox
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
.settings
    position fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: #ffffff
    ul
        margin-top 5px
    .sign
        position relative
        top 15px
        width 100%
        height 50px
        line-height 50px
        margin-bottom 5px
        text-align center
        background-color $color-community-background
        font-size 0
        .text-1
            display inline-block
            font-size 15px
            color red
        .text-2
            display inline-block
            font-size 15px
            color $color-theme
</style>
