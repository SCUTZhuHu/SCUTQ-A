<!-- 问题详情页 -->
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
			<div class="moreAnswer">
				<img src="./more_answers.png">
				更多回答
			</div>
			<div class="toAnswer">
				<img src="./answer_it.png">
				我要回答
			</div>
			<div class="answer">
				<img src="./comments1.png">
				评论
				<span class="answerNum">{{question.answerNum}}</span>
			</div>
			<div class="like">
				<img src="./likes1.png">
				赞
				<span class="likeNum">{{question.likeNum}}</span>
			</div>
			<div class="collect">
				<img src="./collection.png">
				收藏
				<span class="collectNum">{{question.collectNum}}</span>
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
				likeNum:23,
				collectNum:25,
				answerNum:4
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
footer div{
	width: 46px;
	margin-right: 10px;
	cursor: pointer;
}
footer img{
	height: 25px;
	float: left;
	margin-right: 1px;
}
</style>