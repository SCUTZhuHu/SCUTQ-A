<template>
	<div class="item">
		<div class="head">
			<img src="" class="headImg">
			<div class="info">
				<span>{{item.questioner}}</span>
				<span>{{item.releaseTime}}</span>
			</div>
			<div class="tags">
				<div class="label" v-if="item.topicOne !== ''">
					{{item.topicOne}}
				</div>
				<div class="label" v-if="item.topicTwo !== ''">
					{{item.topicTwo}}
				</div>
			</div>
			<img src="./arrow_green_right.png" class="arrow">
		</div>
		<div class="title">{{item.title}}</div>
		<div class="content">{{item.description}}</div>
		<div class="like">
			<img src="./likes.png">
			<span>{{item.likeNum}}</span>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		item:{
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
.item{
	height: 135px;
	background-color: #f5f5f5;
	margin-top: 5px;
	display: flex;
	flex-direction: column;
}
.head{
	padding: 10px 23px 0 15px;
	display: flex;
	align-items: flex-start;
}
.headImg{
	width: 20px;
	height: 20px;
	background-color: #16d6a7;
}
.info{
	font-size: 10px;
	display: flex;
	flex-direction: column;
	margin-left: 2px;
}
.info span:nth-child(2){
	color: #9f9f9f;
}
.tags{
	font-size: 8px;
	padding-top: 2px;
	padding-left: 8px;
	color: #16d6a7;
	flex: 1;
}
.label{
	background-color: #ffffff;
	padding: 2px 6px;
	border-radius: 15px;
	float: left;
	margin-right: 4px;
}
.arrow{
	height: 14px;
}
.title{
	font-size: 10px;
	font-weight: 600;
	margin: 7.5px 18px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.content{
	padding-left: 15px;
	padding-right: 15px;
	font-size: 8px;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.like{
	padding: 5px 0 5px 15px;
	height: 9px;
	font-size: 9px;
}
.like img{
	height: 9px;
}
</style>