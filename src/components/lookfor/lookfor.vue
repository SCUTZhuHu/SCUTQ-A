<template>
  <div :lookforList="lookforList" class="lookfor">
    <scroll ref="scroll" class="content" :data="lookforList.list">
    <div>
    <div class="release">
        <textarea v-if="lookforList.type==='sb'" name="release2" placeholder="我要找人..."></textarea>
        <textarea v-if="lookforList.type==='sth'" name="release3" placeholder="我要找物..."></textarea>        
        <div class="info">
          <span class="title">截止时间</span>
          <input type="text" class="text">
        </div>
        <div class="info">
          <span class="title">联系方式</span>
          <input type="text" class="text">
        </div>
        <m-button></m-button>
    </div>
    <div class="main">
      <div class="data-list">
       <ul>
         <li v-for="item in lookforList.list">
           <p-card :data="item"></p-card>
         </li>
       </ul>
      </div>
    </div>
    </div>
    </scroll>
  </div>
</template>

<script>
import MButton from '../../base/release-btn/release-btn'
import PCard from '../../base/people-card/people-card'
import Scroll from '../../base/scroll/scroll'

export default {
 props:{
   lookforList:{
     type:Object,
     default:null
   }
 },
  components:{
    MButton,
    PCard,
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
.lookfor
  position fixed
  top 65px
  left 0
  bottom 61px
  right 0
  margin-top 13px
  .content
    height 100%
    overflow hidden
    .release
      position relative
      height 161px
      margin 13px 28px
      padding 21px 12px
      background-color $color-community-background
      textarea 
        width 91%
        height 40px
        padding 10px 12px
        background-color #ffffff
        color #282828
        font-size $font-size-small-s
        &::-webkit-input-placeholder
          color $color-community-background
        &:focus::-webkit-input-placeholder 
          color #ffffff
      .info
        margin 6px auto 0 auto 
        .title
          font-size $font-size-small
          color #999999
        .text
          width 81%
          line-height 30px
          height 30px
          margin-left 2px
          outline none
          resize none 
          font-size $font-size-small-s 
</style>
