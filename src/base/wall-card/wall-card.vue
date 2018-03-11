<template>
  <div :data="data" class="card">
    <div class="content">
      <div class="left">
        <div class="up">
          <img v-lazy="data.avatar" class="avatar">
          <div class="text">
            <div class="name">{{data.name}}</div>
            <div class="time">{{data.time}}</div>
          </div>
        </div>
        <div class="down">
          <div class="icon-wrapper">
            <div class="icon" @click="toggleLike" :class="[data.like ? 'icon-1-active' : 'icon-1']"></div>
            <span class="num">{{data.likes}}</span>
          </div>
          <div class="icon-wrapper">
            <div class="icon icon-2"></div>
            <span class="num">{{data.comments}}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <p>{{data.disc}}</p>
      </div>
      <div class="detail"></div>
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
      },
      methods:{
          toggleLike(){
              this.data.like = ! this.data.like
              if(this.data.like){
                 this.data.likes += 1
              }else{
                this.data.likes -= 1
              }
          }
      }
  }

</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
.card
    position relative
    width 100%
    margin-top 5px
    background-color $color-community-background
    .content
        padding 11px 15px
        .left
            display inline-block
            .up
                height 22px
                line-height 22px
                .avatar
                    display inline-block
                    width 25px
                    height 25px
                .text
                    display inline-block
                    margin-left 4px
                    font-size $font-size-small-s
                    .name
                        height 9px
                        line-height 9px
                        margin-bottom 4px
                        color #444444
                    .time
                        height $font-size-small-s
                        line-height $font-size-small-s
                        color #999999
            .down
                margin-left 11px
                margin-top 6px
                .icon-wrapper
                    margin-bottom 4px
                    height 10px
                    line-height 10px
                    color #999999
                    .icon
                        display inline-block
                        width 12.5px
                        height 10px
                        background-size 12.5px 10px
                    .icon-1
                        background-image url('likes_unchoosen.png')
                    .icon-1-active
                          background-image url('likes_choosen.png')
                    .icon-2
                        background-image url('comments.png')
                    .num
                        margin-left 4px
                        font-size 7px
        .right
            display inline-block
            position absolute
            left 35.4%
            line-height 14px
            width 57.3%
            p
                word-break:break-all//折行显示
                display:-webkit-box
                -webkit-line-clamp:4//限制显示行数
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
