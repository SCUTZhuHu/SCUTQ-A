<template>
  <div :data="data" class="p-item">
    <div class="up">
      <h1>题目 {{data.title}}</h1>
    </div>
    <div class="down">
      <div class="left">
        <span>发布时间{{data.time}}</span>
      </div>
      <div class="right">
        <div class="likes">
            <div class="image-l"></div><span>{{data.likes}}</span>
        </div>
        <div class="comments">
            <div class="image-c"></div><span>{{data.comments}}</span>
        </div>
      </div>
    </div>
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
@import '../../common/stylus/variable'

.p-item
    position relative
    height 52px
    width 95%
    padding 12px 2.5%
    margin-top 5px
    background-color $color-community-background
    font-size $font-size-small
    color #999999
    h1
        font-size $font-size-medium-x
        color #282828
    .down
        position relative
        bottom -22px
        .left
            display inline-block
        .right
            position absolute
            right 18px
            display inline-block
            .likes
                display inline-block
                margin-right 10px
                .image-l
                    display inline-block
                    width 13px
                    height 10px
                    background-size 13px 10px
                    background-image url('likes_choosen.png')  
            .comments
                display inline-block
                .image-c
                    display inline-block
                    width 13px
                    height 10px
                    background-size 13px 10px
                    background-image url('comments.png')
        
</style>
