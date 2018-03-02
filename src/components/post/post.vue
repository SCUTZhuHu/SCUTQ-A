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
			<input type="text" name="" class="title">
			<input type="text" name="desc">
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
</style>