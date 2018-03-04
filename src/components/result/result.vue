<template>
	<div class="container">
		<header>
			<div class="input">生活</div>
			<img src="./cancel.png">
		</header>
		<div class="main">
			<item v-for="item of items" :item="item" :key="item.id"></item>
		</div>
	</div>
</template>

<script>
import item from '@/base/compassItem/compassItem'
export default{
	data(){
		return {
			items:[
				{
					id:0,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					topicOne:"生活",
					topicTwo:"学习",
					title:"北二饭堂真是好吃啊",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
					likeNum:866
				},{
					id:1,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					topicOne:"生活",
					topicTwo:"学习",
					title:"北二饭堂真是好吃啊",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
					likeNum:866
				},{
					id:2,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					topicOne:"生活",
					topicTwo:"学习",
					title:"北二饭堂真是好吃啊",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
					likeNum:866
				},{
					id:3,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					topicOne:"生活",
					topicTwo:"学习",
					title:"北二饭堂真是好吃啊",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
					likeNum:866
				},{
					id:4,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					topicOne:"生活",
					topicTwo:"学习",
					title:"北二饭堂真是好吃啊",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
					likeNum:866
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
	width: 100vw;
	display: flex;
	flex-direction: column;
}
header{
	width: 100vw;
	height: 45px;
	display: flex;
	align-items: center;
	background-color: #16d6a7;
}
.input{
	width: 80vw;
	height: 25px;
	border-radius: 15px;
	background-color: white;
	color: #16d6a7;
	font-size: 10px;
	line-height: 25px;
	text-align: center;
	margin-left: 15px;
}
header img{
	height: 19px;
	margin: auto;
}
</style>