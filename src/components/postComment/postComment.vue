<template>
	<div class="container">
		<header>
			<img src="./arrow_white_left.png" class="arrow">
		</header>
		<div class="main">
			<textarea class="input" rows="30" placeholder="请输入你的回答"></textarea>
			<div class="submit">发布</div>
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
	background-color: #16d6a7;
	height: 45px;
	display: flex;
	align-items: center;
}
.arrow{
	height: 14px;
	margin-left: 20px;
}
.main{
	flex: 1;
	background-color: #fcfcfc;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 5px;
}
.input{
	width: 92%;
	border: none;
	background-color: white;
	padding: 8px 17px;
}
.submit{
	width: 50px;
	height: 20px;
	line-height: 20px;
	text-align: center;
	font-size: 12px;
	color: white;
	background-color: #16d6a7;
	border-radius: 20px;
	margin-top: 30px;
}
</style>