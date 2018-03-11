<template>
  <div class="my-card" :data="data">
    <img :src="data.icon" class="icon">
    <div class="title">{{data.title}}</div>
    <div class="detail" @click="goToDetail(data)"></div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default: null
      }
    },
    methods: {
      goToDetail(item) {
        this.$router.push({
          path: `/${item.link}`
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
.my-card
    position relative
    width 100%
    margin-bottom 5px
    background-color $color-community-background
    font-size 0
    .icon
        width 25px
        height 25px
        background-size 25px 25px
        margin 12px 12px 16px 29px
    .title 
        display inline-block
        margin 20px 0
        vertical-align top
        font-size 11px
        color #444444
    .detail
        position absolute
        top 18px
        right 31px
        width 9px
        height 14px
        background-size 9px 14px
        background-image url('arrow_green_right.png')
</style>