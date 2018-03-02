<template>
	<div class="item">
		<div class="headImg"></div>
		<div class="info">
			<div class="header">
				<div>
					<div class="questioner">
						{{item.questioner}}
						<span>回复了你</span>
					</div>
					<span>{{item.releaseTime}}</span>
				</div>
				<img src="./arrow_green_right.png">
			</div>
			<div class="content">{{item.description}}</div>
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
	width: 100vw;
	height: 90px;
	background-color: #f5f5f5;
	margin-top: 5px;
	display: flex;
	align-items: center;
	font-size: 10px;
}
.headImg{
	width: 40px;
	height: 40px;
	background-color: #16d6a7;
	margin-left: 27px;
}
.info{
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 23px 0 18px;
}
.header{
	display: flex;
	align-items: center;
}
.header>div{
	flex: 1;
}
.header>div>span{
	color: #16d6a7;
}
.header img{
	height: 15px;
}
.questioner span{
	margin-left: 25px;
	color: #16d6a7;
}
.content{
	padding-right: 50px;
	font-size: 8px;
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>