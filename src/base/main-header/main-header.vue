<template>
  <div :title="title" class="main-header">
    <span class="title">{{title.name}}</span>
    <div v-if="title.type !== 'main'" @click="back" class="back"></div>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:Object,
            default:null
        }
    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'

.main-header
    display flex
    position relative
    width 100%
    padding 17px 0 17px 0
    background-color $color-theme
    .title
        display flex
        align-self auto //flex水平居中
        margin 0 auto 
        font-size 17px
        color #ffffff
    .back
        display inline-block
        position absolute
        left 20px
        width 8px 
        height 14px
        background-image url('arrow_white_left.png')
        background-size 8px 14px
</style>