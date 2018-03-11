<template>
  <div class="likes">
    <div class="bg-layer"></div>
    <m-header :title="title"></m-header>
    <scroll ref="scroll" class="content" :data="userLikes">
      <ul>
        <li v-for="(item,index) in userLikes">
          <l-item :data="item"></l-item>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import MHeader from '../../base/main-header/main-header'
  import LItem from '../../base/like-item/like-item.vue'
  import Scroll from '../../base/scroll/scroll'
  export default {
    data() {
      return {
        title: {
          name: '我的点赞',
          type: 'likes',
          normal: true
        },
        userLikes: [{
            type: 'passage',
            author: '小黄',
            time:'2018-01-01',
            title: '我在华工二三事',
            source: '',
            disc: ''
          },
          {
            type: 'answer',
            author: '华工校草',
            time:'2018-01-01',
            title: '',
            source: '地球为什么是圆的',
            disc: '因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢'
          },
          {
            type: 'question',
            author: 'haha',
            time:'2018-01-01',
            title: '华工哪里有干洗店',
            source: '',
            disc: ''
          },
          {
            type: 'answer',
            author: '华工校草',
            time:'2018-01-01',
            title: '',
            source: '地球为什么是圆的',
            disc: '因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢'
          },
          {
            type: 'passage',
            author: '小黄',
            time:'2018-01-01',
            title: '我在华工二三事',
            source: '',
            disc: ''
          },
          {
            type: 'answer',
            author: '华工校草',
            time:'2018-01-01',
            title: '',
            source: '地球为什么是圆的',
            disc: '因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢'
          },
          {
            type: 'passage',
            author: '小黄',
            time:'2018-01-01',
            title: '我在华工二三事',
            source: '',
            disc: ''
          },
          {
            type: 'answer',
            author: '华工校草',
            time:'2018-01-01',
            title: '',
            source: '地球为什么是圆的',
            disc: '因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢'
          },
          {
            type: 'passage',
            author: '小黄',
            time:'2018-01-01',
            title: '我在华工二三事',
            source: '',
            disc: ''
          },
          {
            type: 'answer',
            author: '华工校草',
            time:'2018-01-01',
            title: '',
            source: '地球为什么是圆的',
            disc: '因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢'
          },
          {
            type: 'passage',
            author: '小黄',
            time:'2018-01-01',
            title: '我在华工二三事',
            source: '',
            disc: ''
          },
          {
            type: 'answer',
            author: '华工校草',
            time:'2018-01-01',
            title: '',
            source: '地球为什么是圆的',
            disc: '因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢'
          },
          {
            type: 'passage',
            author: '小黄',
            time:'2018-01-01',
            title: '我在华工二三事',
            source: '',
            disc: ''
          },
          {
            type: 'answer',
            author: '华工校草',
            time:'2018-01-01',
            title: '',
            source: '地球为什么是圆的',
            disc: '因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢因为地球喜欢'
          },
        ]
      }
    },
     components: {
      MHeader,
      LItem,
      Scroll
    }
  }

</script>

<style lang="stylus" scoped>
.likes
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
