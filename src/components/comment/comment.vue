<template>
	<div class="container">
		<header>
			<img src="./arrow_white_left.png" class="arrow">
			<div>消息</div>
		</header>
		<div class="main">
			<item v-for="item of items" :item="item" :key="item.id"></item>
		</div>
	</div>
</template>

<script>
import item from '@/base/commentItem/commentItem.vue'
export default{
	data(){
		return{
			items:[
				{
					id:0,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"1小时前",
					description:"this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.",
					likeNum:886
				},{
					id:1,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"1小时前",
					description:"this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.",
					likeNum:886
				},{
					id:2,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"1小时前",
					description:"this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.",
					likeNum:886
				},{
					id:3,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"1小时前",
					description:"this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.this is a comment.",
					likeNum:886
				}
			]
		}
	},
	components:{
		item
	}
}
</script>

<style>
html, body{
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}
</style>
<style scoped>
.container{
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	background-color: #fcfcfc;
}
/* header */
header{
	width: 100%;
	height: 45px;
	background-color: #16d6a7;
	color: white;
	font-size: 15pt;
	line-height: 45px;
	display: flex;
	align-items: center
}
header div{
	overflow: hidden;
	width: 100vw;
	text-align: center;
	margin-left: -25px;
}
.arrow{
	height: 14px;
	margin-left: 17px;
	cursor: pointer;
}
</style>