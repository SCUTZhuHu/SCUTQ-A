<template>
  <div class="info">
    <m-header :title="title"></m-header>
    <ul>
        <li v-for="(item,index) in this.title.setItem">
            <d-card :data="item" class="card">
                <div v-if="index !== 0" class="content">{{getUser[index]}}</div>
                <img v-if="index === 0" :src="getUser[index]">
            </d-card>
        </li>
    </ul>
  </div>
</template>

<script>
  import MHeader from '../../base/main-header/main-header'
  import DCard from '../../base/detail-card/detail-card.vue'

  export default {
    data() {
      return {
        title: {
          name: '个人中心',
          type: 'disc',
          setItem: ['头像','用户名','帐号','性别','地址','联系方式']
        },
        user: {
          avatar: require('./avatar3.jpeg'),
          name: '隔壁王大哥',
          account: '12345678@qq.com',
          sex:'男'
        },
        getUser:[]
      }
    },
    mounted(){
        this.getUser.push(this.user.avatar,this.user.name,this.user.account,this.user.sex)
    },
    components: {
      MHeader,
      DCard
    }
  }
</script>


<style lang="stylus" scoped>
.info
    position fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: #ffffff
    ul
        margin-top 5px
        .card
            position relative
            .content
                display inline-block
                position absolute
                right 11.3%  
                font-size 11px
                color #999999
            img 
                display inline-block
                position absolute
                right 11.3%  
                width 40px
                height 40px
                background-size 40px 40px
                margin 5px 0
</style>
