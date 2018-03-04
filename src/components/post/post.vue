<!-- 提问或写文章 -->
<template>
	<div class="container">
		<header>
			<img src="./cancel.png">
			<div class="name">提问</div>
			<div class="post">发布</div>
		</header>
		<div class="main">
			<span>请选择一到两个标签</span>
			<div class="labelBox">
				<div class="label">学业</div>
				<div class="label">社团</div>
				<div class="label">交通</div>
				<div class="label active">生活</div>
				<div class="label active">娱乐</div>
				<div class="label">其他</div>
			</div>
			<textarea type="text" name="" class="title" placeholder="请输入题目" rows="1"></textarea>
			<textarea type="textarea" name="desc" class="content" placeholder="问题描述" rows="35"></textarea>
		</div>
	</div>
</template>

<script>
export default{

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
	flex-direction: column;
}
header{
	width: 100vw;
	height: 45px;
	display: flex;
	align-items: center;
	background-color: #16d6a7;
	color: white;
}
header img{
	height: 17px;
	margin-left: 17px;
}
.name{
	flex: 1;
	text-align: center;
	font-size: 20px;
}
.post{
	margin-right: 16px;
}
.main{
	width: 100vw;
	font-size: 10px;
	display: flex;
	flex-direction: column;
	background-color: #fcfcfc;
	padding-top: 10px;
}
.main span{
	color: #999999;
	padding-left: 18px;
}
.labelBox{
	padding-left: 18px;
	padding-top: 5px;
	padding-bottom: 13px;
	display: flex;
	align-items: center;
}
.label{
	width: 25px;
	height: 15px;
	color: #16d6a7;
	line-height: 15px;
	border-radius: 10px;
	margin-right: 13px;
	background-color: #ffffff;
}
.active{
	background-color: #16d6a7;
	color: #ffffff;
}
.title{
	width: 100vw;
	background-color: #ffffff;
	height: 30px;
	line-height: 30px;
	border: none;
	padding-left: 18px;
}
.content{
	width: 100vw;
	flex: 1;
	border: none;
	margin-top: 6px;
	padding-left: 18px;
}
</style>