<template>
  <transition name="popup">
    <div class="popup" :data="data">
        <div class="bg-layer"></div>
        <div class="box">
            <div class="content">确认{{content}}</div>
            <div @click="selectConfirm" class="confirm">确定</div>
            <div @click="selectCancel" class="cancel">取消</div>
        </div>
    </div>
  </transition>
</template>

<script>
  export default {
      props:{
          data:{
              type:String,
              default:''
          }
      },
      data(){
          return{
             content:''
          }
      },
      mounted(){
          if(this.data === 'settings'){
              this.content = '退出登录'
          }else if(this.data === 'collections'){
              this.content = '取消收藏'
          }
      },
      methods:{
          selectConfirm(){
              this.$emit('selectConfirm')
          },
          selectCancel(){
              this.$emit('selectCancel')
          }
      }
  }

</script>

<style lang="stylus" scoped>
.popup
    .bg-layer
        position: fixed
        z-index: 150
        top: 0
        left: 0
        bottom: 0
        right: 0
        background-color #000000
        opacity 0.5
    .box
        font-size 14px
        position:fixed;  //弹框居中显示
        top:40%;  
        left:50%;  
        transform:translateX(-50%) translateY(-40%);  
        width 200px
        height 100px
        background-color #ffffff
        z-index 200
        .content
            text-align center
            height 60px
            line-height 50px
            border-bottom solid 1px #cccccc
        .confirm
            display inline-block
            width 48%
            height 40px
            line-height 40px
            text-align center
            border-right solid 1px #cccccc
        .cancel
            display inline-block
            text-align center
            width 48%
            height 40px
            line-height 40px
</style>
