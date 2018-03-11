<template>
  <div :data="data" class="detail-card">
      <div class="title">{{data}}</div>
      <div class="detail"></div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
      data:{
        type:String,
        default:''
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'

.detail-card
    position relative
    width 100%
    height 50px
    line-height 50px
    margin-bottom 5px
    background-color $color-community-background
    font-size 0
    .title
        display inline-block
        margin-left 32px
        font-size $font-size-medium
        color #444444
    .detail
        position absolute
        top 18px
        right 22px
        width 9px
        height 14px
        margin-left 20px
        background-size 9px 14px
        background-image url('arrow_green_right.png')
</style>
