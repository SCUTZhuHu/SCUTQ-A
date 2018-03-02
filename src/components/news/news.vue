<!-- 消息页面 -->
<template>
	<div class="container">
		<header>
			<div>消息</div>
		</header>
		<div class="main">
			<div class="tags">
				<div class="button active">
					<span>回答</span>
					<span class="choosen"></span>
				</div>
				<div class="button">
					<span>评论</span>
					<span class="choosen"></span>
				</div>
				<div class="button">
					<span>点赞</span>
					<span class="choosen"></span>
				</div>
			</div>
			<item v-for="item of items" :item="item" :key="item.id"></item>
		</div>
		<footer>
			<div class="menuButton">
				<img src="./compass_unchoosen.png">
				<p>校园知乎</p>
			</div>
			<div class="menuButton">
				<img src="./scut_community.png">
				<p>华园社区</p>
			</div>
			<div class="menuButton">
				<img src="./news_press.png">
				<p>消息</p>
				<span class="tips">10</span>
			</div>
			<div class="menuButton">
				<img src="./myself.png">
				<p>我的</p>
			</div>
		</footer>
	</div>
</template>

<script>
import item from '@/base/newsItem/newsItem.vue'
export default{
	data(){
		return{
			items:[
				{
					id:0,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
				},{
					id:1,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
				},{
					id:2,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
				},{
					id:3,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
				},{
					id:4,
					imgUrl:"",
					questioner:"北二打饭小哥",
					releaseTime:"一小时前",
					description:"文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章",
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
	margin: auto;
	padding: 0 17px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
/* main */
.main{
	flex: 1;
	padding-bottom: 60px;
}
.tags{
	height: 37px;
	width: 100vw;
	display: flex;
	justify-content: center;
	font-size: 10px;
	color: #16d6a7;
}
.button{
	width: 24vw;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.button span{
	height: 34px;
	line-height: 34px;
}
.choosen{
	width: 100%;
	border-radius: 5px;
}
.active .choosen{
	background-color: #16d6a7;
}
/* footer */
footer{
	width: 100vw;
	height: 60px;
	background-color: white;
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.menuButton{
	height: 37px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #444444;
	font-size: 8px;
	position: relative;
}
.menuButton:nth-child(3){
	color: #26d9ad;
}
.menuButton img{
	height: 30px;
}
.menuButton p{
	display: inline-block;
	text-align: center;
	margin: 0;
	padding: 0;
}
.tips{
	height: 14px;
	min-width: 10px;
	text-align: center;
	line-height: 14px;
	background-color: red;
	border-radius: 14px;
	padding: 0 2px;
	color: white;
	position: absolute;
	top: 0;
	right: 0;
}
</style>