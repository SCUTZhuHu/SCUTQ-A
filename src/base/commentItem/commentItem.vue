<template>
	<div class="item">
		<div class="head">
			<img src="">
			<div class="info">
				<span>{{item.questioner}}</span>
				<span>{{item.releaseTime}}</span>
			</div>
			<div class="like">
				<img src="./likes_unchoosen.png">
				<span>{{item.likeNum}}</span>
			</div>
		</div>
		<div class="content">{{item.description}}</div>
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
	width: 100vw;
	background-color: #f5f5f5;
	margin-top: 8px;
	min-height: 90px;
	display: flex;
	flex-direction: column;
	font-size: 12px;
}
.head{
	display: flex;
	padding: 13px 17px 7px 16px;
}
.head>img{
	width: 20px;
	height: 20px;
	background-color: #16d6a7;
}
.info{
	display: flex;
	flex-direction: column;
	flex: 1;
}
.info span:nth-child(2){
	color: #16d6a7;
}
.like{
	color: #16d6a7;
}
.like img{
	height: 11px;
}
.content{
	padding: 0 14px 17px 16px;
}
</style>