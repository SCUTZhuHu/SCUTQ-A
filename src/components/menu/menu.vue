<template>
  <div class="m-menu">
      <router-link to="/community/wall" tag="div" class="menu-item">
        <div class="menu-link">
            <div class="text">吐槽墙</div>
        </div>
      </router-link>
      <router-link to="/community/lookforsb" tag="div" class="menu-item">
        <div class="menu-link">
            <div class="text">找人</div>
        </div>
      </router-link>
       <router-link to="/community/lookforsth" tag="div" class="menu-item">
        <div class="menu-link">
            <div class="text">找物</div>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
.m-menu
    display flex
    height 30px
    line-height 30px
    background-color $color-theme
    .menu-item
        flex 1
        text-align center
        .menu-link
            padding-bottom 9px
            padding-top 3px
            font-size $font-size-medium-x
            color $color-menu
            height 16px
            line-height 16px
            .text
                width 53%
                margin 0 auto
                padding-bottom 9px 
        &.router-link-active
            .menu-link
                color $color-menu-active
                .text
                    border-bottom solid 3px $color-menu-active

</style>
