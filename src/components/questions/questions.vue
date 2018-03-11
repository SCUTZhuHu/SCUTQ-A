<template>
  <div class="questions">
      <div class="bg-layer"></div>
    <m-header :title="title"></m-header>
    <scroll ref="scroll" class="content" :data="userQuestionsList">
      <ul>
        <li v-for="item in userQuestionsList">
          <p-item :data="item"></p-item>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import MHeader from '../../base/main-header/main-header'
  import PItem from '../../base/passage-item/passage-item'
  import Scroll from '../../base/scroll/scroll'

  export default {
    data() {
      return {
        title: {
          name: '我的提问',
          type: 'passages',
        },
        userQuestionsList: [{
            title: '为什么地球是圆的',
            time: '2018-01-01',
            likes: 100,
            comments: 100
          },
          {
            title: '为什么地球是圆的',
            time: '2018-01-01',
            likes: 100,
            comments: 100
          },
          {
            title: '为什么地球是圆的',
            time: '2018-01-01',
            likes: 100,
            comments: 100
          },
          {
            title: '为什么地球是圆的',
            time: '2018-01-01',
            likes: 100,
            comments: 100
          },
          {
            title: '为什么地球是圆的',
            time: '2018-01-01',
            likes: 100,
            comments: 100
          },
          {
            title: '为什么地球是圆的',
            time: '2018-01-01',
            likes: 100,
            comments: 100
          },
          {
            title: '为什么地球是圆的',
            time: '2018-01-01',
            likes: 100,
            comments: 100
          },
          {
            title: '为什么地球是圆的',
            time: '2018-01-01',
            likes: 100,
            comments: 100
          },
          {
            title: '为什么地球是圆的',
            time: '2018-01-01',
            likes: 100,
            comments: 100
          }
        ]
      }
    },
    components: {
      MHeader,
      PItem,
      Scroll
    }
  }
</script>


<style lang="stylus" scoped>
.questions
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
