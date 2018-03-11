<template>
  <div class="wall" ref="wall">
    <scroll ref="scroll" class="content" :data="toggleList">
      <div>
        <!-- 所有scroll的内容都必须在同一个div中 -->
        <div class="release" ref="release">
          <textarea name="release1" placeholder="我要吐槽..."></textarea>
          <m-button></m-button>
        </div>
        <div class="main" ref="main">
          <div class="menu">
            <div @click="filterHot" class="menu-item">
              <div :class="toggleHotActive" class="text">最热</div>
            </div>
            <div @click="filterNew" class="menu-item">
              <div :class="toggleNewActive" class="text">最新</div>
            </div>
          </div>
          <div class="listview">
            <div v-if="this.hot" class="list-content">
              <div class="data-list">
                <ul>
                  <li v-for="item in hotList" class="item">
                    <w-card :data="item"></w-card>
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="this.new" class="list-content">
              <div class="data-list">
                <ul>
                  <li v-for="item in newList" class="item">
                    <w-card :data="item"></w-card>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import MButton from '../../base/release-btn/release-btn'
import Scroll from '../../base/scroll/scroll'
import WCard from '../../base/wall-card/wall-card'


export default {
  data(){
    return{
       hotList: [{
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          },
          {
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          },
          {
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          },
          {
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          },
             {
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          },
           {
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          },
           {
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          },
           {
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          },
           {
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          },
           {
            name: '老王',
            time: '1小时前',
            likes: 123,
            comments: 666,
            disc: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
            avatar: require('./avatar.jpeg'),
            like: false
          }
        ],
        newList:[
           {
            name: '张三',
            time: '10小时前',
            likes: 123,
            comments: 666,
            disc: 'qwwejodwejfopjwefopwjefdkndnierjfiioengiewogewindsnfjiwejfopwejfsdjkojopejwopjwfojepofjwehfioew',
            avatar: require('./avatar2.jpeg'),
            like: false
          },
          {
            name: '张三',
            time: '10小时前',
            likes: 123,
            comments: 666,
            disc: 'qwwejodwejfopjwefopwjefdkndnierjfiioengiewogewindsnfjiwejfopwejfsdjkojopejwopjwfojepofjwehfioew',
            avatar: require('./avatar2.jpeg'),
            like: false
          },
          {
            name: '张三',
            time: '10小时前',
            likes: 123,
            comments: 666,
            disc: 'qwwejodwejfopjwefopwjefdkndnierjfiioengiewogewindsnfjiwejfopwejfsdjkojopejwopjwfojepofjwehfioew',
            avatar: require('./avatar2.jpeg'),
            like: false
          },
          {
            name: '张三',
            time: '10小时前',
            likes: 123,
            comments: 666,
            disc: 'qwwejodwejfopjwefopwjefdkndnierjfiioengiewogewindsnfjiwejfopwejfsdjkojopejwopjwfojepofjwehfioew',
            avatar: require('./avatar2.jpeg'),
            like: false
          },
          {
            name: '张三',
            time: '10小时前',
            likes: 123,
            comments: 666,
            disc: 'qwwejodwejfopjwefopwjefdkndnierjfiioengiewogewindsnfjiwejfopwejfsdjkojopejwopjwfojepofjwehfioew',
            avatar: require('./avatar2.jpeg'),
            like: false
          },
          {
            name: '张三',
            time: '10小时前',
            likes: 123,
            comments: 666,
            disc: 'qwwejodwejfopjwefopwjefdkndnierjfiioengiewogewindsnfjiwejfopwejfsdjkojopejwopjwfojepofjwehfioew',
            avatar: require('./avatar2.jpeg'),
            like: false
          },
          {
            name: '张三',
            time: '10小时前',
            likes: 123,
            comments: 666,
            disc: 'qwwejodwejfopjwefopwjefdkndnierjfiioengiewogewindsnfjiwejfopwejfsdjkojopejwopjwfojepofjwehfioew',
            avatar: require('./avatar2.jpeg'),
            like: false
          },
          {
            name: '张三',
            time: '10小时前',
            likes: 123,
            comments: 666,
            disc: 'qwwejodwejfopjwefopwjefdkndnierjfiioengiewogewindsnfjiwejfopwejfsdjkojopejwopjwfojepofjwehfioew',
            avatar: require('./avatar2.jpeg'),
            like: false
          },
          {
            name: '张三',
            time: '10小时前',
            likes: 123,
            comments: 666,
            disc: 'qwwejodwejfopjwefopwjefdkndnierjfiioengiewogewindsnfjiwejfopwejfsdjkojopejwopjwfojepofjwehfioew',
            avatar: require('./avatar2.jpeg'),
            like: false
          }
        ],
        hot:true,
        new:false
      }
  },
  computed:{
    toggleHotActive(){
      return this.hot ? 'text-active' : 'text'
    },
    toggleNewActive(){
      return this.new ? 'text-active' : 'text'
    },
    toggleList(){
      return this.hot ? this.hotList : this.newList
    }
  },
  methods:{
    filterHot(){
      this.hot = true
      this.new = false
    },
    filterNew(){
      this.hot = false
      this.new = true
    }
  },
  components:{
    MButton,
    Scroll,
    WCard
  } 
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable'
.wall
  position fixed
  top 65px
  left 0
  bottom 61px
  right 0
  margin-top 13px
  .content
    height 100%
    overflow hidden
    .release
      position relative
      height 113px
      margin 13px 28px
      padding 21px 12px
      background-color $color-community-background
      textarea 
        width 91%
        height 70px 
        padding 10px 12px
        background-color #ffffff
        color #282828
        outline none
        resize none
        font-size $font-size-small-s
        &::-webkit-input-placeholder
          color $color-community-background
        &:focus::-webkit-input-placeholder 
          color #ffffff
    .menu
      display flex
      width 100%
      height 50px
      margin-top 17px
      background-color $color-community-background
      .menu-item
        flex 1
        .text
          width 50%
          margin 16px auto 0 auto 
          padding-bottom 16px
          text-align center
          line-height $font-size-medium-x
          font-size $font-size-medium-x
          color #282828
        .text-active
          border-bottom solid 3px $color-theme
          color $color-theme
</style>
