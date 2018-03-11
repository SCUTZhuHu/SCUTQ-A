<template>
  <div class="community">
    <c-header></c-header>
    <m-menu></m-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import CHeader from '../../base/community-header/community-header'
import MMenu from '../menu/menu'

export default {
  components:{
    CHeader,
    MMenu
  }
}
</script>

<style lang="stylus" scoped>

</style>
