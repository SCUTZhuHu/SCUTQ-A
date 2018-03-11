<template>
  <div>
    <scroll ref="scroll" class="content" :data="dataList">
      <div class="data-list">
        <ul>
          <li v-for="item in dataList" class="item">
            <c-box :data="item"></c-box>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
  import CBox from '../../base/community-box/community-box'
  import Scroll from '../../base/scroll/scroll'

  export default {
    props: {
      dataList: {
        type: Array,
        default: []
      }
    },
    methods: {
      //   selectItem(item,index){
      //     this.$emit('select',item,index)
      //   }
    },
    components: {
      CBox,
      Scroll
    }
  }

</script>

<style lang="stylus" scoped>
.content
    height: 100%
    overflow: hidden
</style>
