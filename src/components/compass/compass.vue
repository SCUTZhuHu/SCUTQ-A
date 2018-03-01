<template>
	<div class="container">
		<header>
			<div class="buttonBox">
				<div class="search"></div>
				<img class="ask" src="./my_question.png"></img>
			</div>
			<div class="tags">
				<div class="question active">问答</div>
				<div class="article">文章</div>
			</div>
		</header>
		<div class="main">
			<div class="labelBox">
				<div class="label">
					<img src="./study_icon.png">
					<p>学业</p>
				</div>
				<div class="label">
					<img src="./club_icon.png">
					<p>社团</p>
				</div>
				<div class="label">
					<img src="./traffic_icon.png">
					<p>交通</p>
				</div>
				<div class="label">
					<img src="./life_icon.png">
					<p>生活</p>
				</div>
				<div class="label">
					<img src="./entertainment_icon.png">
					<p>娱乐</p>
				</div>
				<div class="label">
					<img src="./others_icon.png">
					<p>其他</p>
				</div>
			</div>
			<item v-for="item of items" :item="item" :key="item.id"></item>
		</div>
		<footer>
			<div class="menuButton">
				<img src="./compass_choosen.png">
				<p>校园知乎</p>
			</div>
			<div class="menuButton">
				<img src="./scut_community.png">
				<p>华园社区</p>
			</div>
			<div class="menuButton">
				<img src="./news.png">
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
import item from '@/base/compassItem/compassItem.vue'
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
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	background-color: #fcfcfc;
}
/* header */
header{
	background-color: #16d6a7;
	display: flex;
	flex-direction: column;
}
.buttonBox{
	padding: 12px 0 0 15px;
	display: flex;
	justify-content: space-between;
}
.search{
	width: 80%;
	height: 25px;
	background-color: white;
	border-radius: 25px;
	line-height: 25px;
	text-align: center;
}
.ask{
	height: 25px;
	margin: auto;
	cursor: pointer;
}
.tags{
	height: 40px;
	line-height: 40px;
	color: white;
	font-size: 16px;
	display: flex;
	justify-content: space-around;
}
.question, .article{
	width: 24%;
	text-align: center;
	border-bottom: solid 3px #16d6a7;
}
.active{
	border-bottom: solid 3px white;
}
/* main */
.main{
	flex: 1;
	padding-bottom: 60px;
}
.labelBox{
	height: 55px;
	background-color: white;
	display: flex;
	color: #16d6a7;
	font-size: 10px;
	justify-content: space-around;
	align-items: center;
	padding: 0 20px;
}
.label{
	width: 25px;
	height: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
}
.label img{
	height: 15px;
}
.label p{
	display: inline-block;
	text-align: center;
	padding: 0;
	margin: 0;
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
.menuButton:nth-child(1){
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