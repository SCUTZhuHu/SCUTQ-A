<template>
  <div class="m-header">
    <form action="demo_form.php" method="get">
      <input type="search" name="search1"  placeholder="请输入搜索内容"/>
    </form>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
.m-header
  display flex
  background-color $color-theme
  form 
    flex 1
    margin 10px 15px
    text-align center 
    border-radius 10px
    input 
      width 100%
      height 24px
      border 0px
      outline none 
      border-radius 10px
      font-size 10px
      color #282828
      line-height 10px
      background-color #ffffff
      &::-webkit-input-placeholder
        color #e2e2e2
        text-align center 
      &:focus::-webkit-input-placeholder 
        color #ffffff
</style>
