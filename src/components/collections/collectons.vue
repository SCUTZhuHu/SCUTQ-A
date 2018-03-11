<template>
  <div class="collections">
    <div class="bg-layer"></div>
    <m-header :title="title"></m-header>
    <scroll ref="scroll" class="content" :data="userCollections">
      <ul>
        <li v-for="(item,index) in userCollections">
          <c-item :data="item" @cancelLike="toggleNormal(index)"></c-item>
        </li>
      </ul>
    </scroll>
    <p-box :data="title.type" v-if="!title.normal" @selectConfirm="confirm"
            @selectCancel="cancel"></p-box>    
  </div>
</template>

<script>
  import MHeader from '../../base/main-header/main-header'
  import CItem from '../../base/collection-item/collection-item.vue'
  import Scroll from '../../base/scroll/scroll'
  import PBox from '../../base/popup-box/popup-box'

  export default {
    data() {
      return {
        title: {
          name: '我的收藏',
          type: 'collections',
          normal:true
        },
        cancelIndex:0,
        userCollections: [{
            type: 'question',
            title: '为什么地球是圆的',
            time: '2018-01-01',
            like: true
          },
          {
            type: 'passage',
            title: '我在华工二三事',
            time: '2018-01-01',
            like: true
          },
          {
            type: 'question',
            title: '为什么地球是圆的',
            time: '2018-01-01',
            like: true
          },
          {
            type: 'passage',
            title: '我在华工二三事',
            time: '2018-01-01',
            like: true
          },
          {
            type: 'question',
            title: '为什么地球是圆的',
            time: '2018-01-01',
            like: true
          },
          {
            type: 'passage',
            title: '我在华工二三事',
            time: '2018-01-01',
            like: true
          },
          {
            type: 'question',
            title: '为什么地球是圆的',
            time: '2018-01-01',
            like: true
          },
          {
            type: 'passage',
            title: '我在华工二三事',
            time: '2018-01-01',
            like: true
          },
          {
            type: 'question',
            title: '为什么地球是圆的',
            time: '2018-01-01',
            like: true
          },
          {
            type: 'passage',
            title: '我在华工二三事',
            time: '2018-01-01',
            like: true
          },
        ]
      }
    },
    methods:{
       toggleNormal(index){
           this.title.normal = false
           this.cancelIndex = index
       },
       confirm(){
           this.userCollections.splice(this.cancelIndex,1)
           this.title.normal = true
       },
        cancel(){
          this.title.normal = true
      }
    },
    components: {
      MHeader,
      CItem,
      Scroll,
      PBox
    }
  }

</script>

<style lang="stylus" scoped>
.collections
    position fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 52px
    right: 0
    background: #ffffff
    .bg-layer
        position fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: #ffffff
    .content
        height 100%
        overflow hidden

</style>
