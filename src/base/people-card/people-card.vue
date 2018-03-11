<template>
  <div :data="data" class="card">
      <div class="left">
          <div class="name">{{data.name}}</div>
          <div class="time">{{data.endTime}}截止</div>
          <button>联系他</button>
      </div>
      <div class="right"><p>{{data.disc}}</p></div>
      <div class="detail"></div>
  </div>
</template>

<script>
export default {
  props:{
      data:{
          type:Object,
          default:null
      }
  }
}
</script>

<style lang="stylus" scoped>
// scoped 属性会自动添加一个唯一的属性 
@import '../../common/stylus/variable'
.card
    position relative
    height 52px
    width 95%
    padding 12px 2.5%
    margin-top 5px
    background-color $color-community-background
    .left
        display inline-block
        margin-right 22px
        .name
            margin-bottom 5px
            font-size $font-size-small-s
            color #444444
        .time
            margin-bottom 6px
            font-size $font-size-small-s
            color #999999
        button 
            width 50px
            height 20px
            border-radius 5px
            border 0
            outline none 
            background-color $color-theme
            color #ffffff
            font-size $font-size-small-s
    .right
        display inline-block
        position absolute
        left 35.4%
        line-height 14px
        width 57.3%
        p
            word-break:break-all
            display:-webkit-box
            -webkit-line-clamp:4
            -webkit-box-orient:vertical
            overflow:hidden
            margin 0
            font-size $font-size-small-s
            color #444444
    .detail
        display inline-block
        position absolute
        left 93%
        background-image url('arrow_green_right.png')
        height 14px
        width 9px
        background-size 9px 14px
</style>
