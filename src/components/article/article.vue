<!-- 文章详情页 -->
<template>
	<div class="container">
		<header>
			<img src="./arrow_white_left.png" class="arrow">
			<div>{{question.title}}</div>
		</header>
		<div class="main">
			<div class="info">
				<img src="" class="headImg">
				<div class="postInfo">
					<span>{{question.questioner}}</span>
					<span>{{question.releaseTime}}</span>
				</div>
				<div class="tags">
					<div class="label" v-if="question.topicOne !== ''">
						{{question.topicOne}}
					</div>
					<div class="label" v-if="question.topicTwo !== ''">
						{{question.topicTwo}}
					</div>
				</div>
			</div>
			<div class="content">{{question.description}}</div>
		</div>
		<footer>
			<div class="menuItem">
				<img src="./comments1.png">
				<div>	
					<span>评论</span>
					<span class="answerNum">{{question.answerNum}}</span>
				</div>
			</div>
			<div class="menuItem">
				<img src="./likes1.png">
				<div>
					<span>赞</span>
					<span class="likeNum">{{question.likeNum}}</span>
				</div>
			</div>
			<div class="menuItem">
				<img src="./collection.png">
				<div>
					<span>收藏</span>
					<span class="collectNum">{{question.collectNum}}</span>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default{
	data(){
		return{
			question:{
				imgUrl:"",
				questioner:"北二打饭小哥",
				releaseTime:"2018年1月1日",
				topicOne:"生活",
				topicTwo:"学习",
				title:"北二饭堂真好吃",
				description:"this is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an articlethis is an article",
				likeNum:1,
				collectNum:20,
				answerNum:400
			}
		}
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
.arrow{
	margin-left: 17px;
	cursor: pointer;
}
/* main */
.main{
	flex: 1;
	background-color: #f5f5f5;
	margin-top: 5px;
	margin-bottom: 4px;
	padding: 0 17px 17px 17px;
}
.info{
	height: 86px;
	display: flex;
	align-items: center;
	font-size: 14px;
}
.postInfo span{
	display: block;
}
.postInfo span:nth-child(2){
	color: #999999;
}
.headImg{
	width: 40px;
	height: 40px;
	background-color: #16d6a7;
	margin-right: 4px;
}
.tags{
	height: 40px;
	padding-top: 2px;
	padding-left: 8px;
	color: #16d6a7;
}
.label{
	background-color: #ffffff;
	padding: 2px 6px;
	border-radius: 15px;
	float: left;
	margin-right: 4px;
}
/* footer */
footer{
	height: 60px;
	background-color: white;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	color: #16d6a7;
	font-size: 10px;
}
.menuItem{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-right: 10px;
	cursor: pointer;
}
.menuItem span{
	display: flex;
	flex-direction: column;
}
footer img{
	height: 25px;
	float: left;
	margin-right: 1px;
}
</style>