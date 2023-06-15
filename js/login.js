let user = document.getElementById("user");
let pass = document.getElementById("pass");
let submit = document.getElementsByClassName("submit")[0];

submit.addEventListener("click",function(){
	if(pass.value === localStorage.getItem(user.value)){
		localStorage.setItem("_now_user",user.value);
		alert("登录成功！");
		window.open("./page/zy1_Home.html");
	}
	else{
		alert("密码不匹配");
	}
})
