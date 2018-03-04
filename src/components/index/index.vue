<template>
	<div class="container">
		<img src="./logo.png">
		<div>华工问答</div>
		<div class="button">登录</div>
		<div>还没注册？点击 <span>注册</span></div>
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
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
img{
	height: 84px;
	margin-bottom: 13px;
}
.container div:nth-child(2){
	color: #282828;
	font-size: 20px;
	margin-bottom: 75px;
}
.container div:nth-child(4){
	color: #282828;
	font-size: 12px;
}
.button{
	width: 100px;
	height: 30px;
	background-color: #16d6a7;
	border-radius: 30px;
	font-size: 12px;
	line-height: 30px;
	text-align: center;	
	color: white;
	margin-bottom: 10px;
	cursor: pointer;
}
span{
	color: #16d6a7;
	text-decoration: underline;
}
</style>