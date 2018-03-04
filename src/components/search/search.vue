<template>
	<div class="container">
		<header>
			<div class="input">生活</div>
			<img src="./cancel.png">
		</header>
		<div class="main">
			<div class="history">
				<div class="title">
					<h3>搜索历史</h3>
					<span>清空历史</span>
				</div>
				<div class="labelBox">
					<div class="label">北二饭堂</div>
					<div class="label">充卡</div>
					<div class="label">今年VHDL怎么这么难</div>
					<div class="label">北一饭堂</div>
					<div class="label">西区四楼</div>
				</div>
			</div>
			<div class="hot">
				<div class="title"><h3>热门搜索</h3></div>
				<div class="labelBox">
					<div class="label">北二饭堂</div>
					<div class="label">充卡</div>
					<div class="label">今年VHDL怎么这么难</div>
					<div class="label">北一饭堂</div>
					<div class="label">西区四楼</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
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
.main{
	flex: 1;
	display: flex;
	flex-direction: column;
	background-color: white;
	padding: 0 22px;
	color: #999999;
}
.history, .hot{
	min-height: 150px;
}
.title{
	display: flex;
	align-items: center;
}
.title span{
	color: #a7a7a7;
}
h3{
	flex: 1;
}
.label{
	font-size: 12px;
	background-color: #eeeeee;
	height: 20px;
	line-height: 20px;
	text-align: center;
	border-radius: 5px;
	margin-right: 13px;
	margin-bottom: 17px;
	display: inline-block;
	padding: 0 4px;
}
</style>