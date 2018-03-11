<template>
  <div :data="data" class="c-item">
      <div class="title">
          <div class="type">{{this.text}}</div>
          <span>{{data.title}}</span>
      </div>
      <div class="foot">
          <div class="left">收藏时间 {{data.time}}</div>
          <div @click="toggleLike" class="right" :class="data.like ? 'like' : 'unlike'"></div>
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
  data(){
      return{
          text:''
      }
  },
  mounted(){
      if(this.data.type === 'question'){
          this.text = '问答'
      }else{
          this.text = '文章'
      }
  },
  methods:{
      toggleLike(){
          if(!this.data.like){
              this.data.like = true
          }else{
              this.$emit('cancelLike')
          }
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'

.c-item
    position relative
    height 52px
    width 95%
    padding 12px 2.5%
    margin-top 5px
    background-color $color-community-background
    font-size $font-size-small
    color #999999
    .title
        .type
            display inline-block
            width 25px
            height 15px
            line-height 15px
            text-align center 
            font-size $font-size-small-s
            color #ffffff
            background-color $color-theme
        span 
            font-size $font-size-medium-x
            color #282828
    .foot
        position relative
        top 25px
        .left
            display inline-block

        .right
            display inline-block
            position absolute
            right 2.5%
            width 13px
            height 14px
            background-size 13px 14px
        .like
            background-image url('collection_choosen.png')
        .unlike
            background-image url('my_collection.png')
                
</style>
