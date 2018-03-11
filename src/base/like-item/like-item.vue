<template>
  <div :data="data" class="l-item">
      <div v-if="data.type === 'passage'" class="content">你点赞了<span>{{data.author}}</span>的文章<span>“{{data.title}}”</span></div>
      <div v-if="data.type === 'question'" class="content">你点赞了<span>{{data.author}}</span>的提问<span>“{{data.title}}”</span></div>
      <div v-if="data.type === 'answer'" class="content-2">你点赞了<span>{{data.author}}</span>在<span>“{{data.source}}”</span>的回答：{{data.disc}}</div>
      <div class="time">{{data.time}}</div>
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

.l-item
    position relative
    width 95%
    padding 12px 2.5%
    margin-top 5px
    background-color $color-community-background
    font-size $font-size-small
    color #444444
    span 
        color $color-theme
    .content-2
        height: 36px
        word-break:break-all//折行显示
        display:-webkit-box
        -webkit-line-clamp:3//限制显示行数
        -webkit-box-orient:vertical
        overflow:hidden
    .time
        margin-top 10px
        color #999999
</style>
