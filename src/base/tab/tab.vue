<template>
  <div class="tab">
    <router-link to="/zhihu" tag="div" class="tab-item">
      <div class="tab-link">
          <!-- $event获取当前点击对象 -->
          <div class="icon icon-1"></div>
          <p class="text">校园知乎</p>
      </div>
    </router-link>
    <router-link to="/community" tag="div" class="tab-item">
      <div class="tab-link">
          <div class="icon icon-2"></div>
          <p class="text">华园社区</p>
      </div>
    </router-link>
    <router-link to="/message" tag="div" class="tab-item">
      <div class="tab-link">
          <div class="icon icon-3"></div>
          <p class="text">消息</p>
      </div>
    </router-link>
    <router-link to="/my" tag="div" class="tab-item">
      <div class="tab-link">
          <div class="icon icon-4"></div>
          <p class="text">我的</p>
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
.tab
    display flex
    align-items center //居中对齐弹性盒的各项 <div> 元素
    position fixed
    left 0
    bottom 0
    width 100%
    height 61px
    box-shadow 0px 0px  1px 1px #eeeeee
    background-color #ffffff
    .tab-item
        flex 1
        text-align center
        .tab-link
            padding 8px 0
            .icon
                display inline-block
                width 29px
                height 30px
                background-size 29px 30px
            .icon-1
                background-image url('compass_unchoosen.png')
            .icon-2
                background-image url('scut_community.png')
            .icon-3
                background-image url('news.png')
            .icon-4
                background-image url('myself.png')
            .text
                font-size $font-size-small-s
                line-height $font-size-small-s
                margin 0
        &.router-link-active
            .tab-link
                .icon-1
                    background-image url('compass_choosen.png')
                .icon-2
                    background-image url('scut_community_press.png')
                .icon-3
                    background-image url('news_press.png')
                .icon-4
                    background-image url('myself_press.png')
                .text
                    color $color-theme

</style>
