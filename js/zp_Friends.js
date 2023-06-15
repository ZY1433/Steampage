window.onload = function() {
	var Who = document.getElementsByClassName("zy1_userName")[0];
	var Words = document.getElementById("words");
	var TalkWords = document.getElementById("talkwords");
	var TalkSub = document.getElementById("talksub");
	TalkSub.onclick = function() {
		//定义空字符串
		var str = "";
		if (TalkWords.value == "") {
			// 消息为空时弹窗
			alert("消息不能为空");
			return;
		}
		
		str = `<div class="btalk"><span>${Who.innerHTML} :` + TalkWords.value + '</span></div>';
		
		Words.innerHTML = Words.innerHTML + str;
	}
}

var zp_button = document.getElementsByClassName("zp_button");
var talk_con = document.getElementsByClassName("talk_con")[0];
var closeSub = document.getElementById("closesub");
for(let i = 0 ; i < zp_button.length; i ++){
	zp_button[i].addEventListener("click",function(){
		talk_con.setAttribute("style", "display:block");
	})
}
closeSub.addEventListener("click",function(){
		talk_con.setAttribute("style", "display:none");
	})