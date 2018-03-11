<template>
  <div class="button">
      <button value="test">发布</button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
.button
    button
        position absolute
        right 4%
        width 50px
        height 20px
        margin-top 13px
        border-radius 5px
        border 0
        outline none 
        background-color $color-theme
        color #ffffff
        font-size 10px
</style>
