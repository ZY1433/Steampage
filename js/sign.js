

let user = document.getElementById("user");
let email = document.getElementById("email");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let submit = document.getElementsByClassName("submit")[0];
let check = document.getElementsByClassName("check");

function t(){
	// let reguser = /^[a-zA-Z0-9_]{4,16}$/;
	let regemail = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
	let regpassword = /^[a-zA-Z0-9_]{8,}$/;
	let flag1 = false,flag2 = false,flag3 = false,flag4 = false;
	if(user.value.length < 2 || user.value.length > 10){
		check[0].innerHTML = "*非2-10位字符"
		flag1 = false;
	}
	else{
		check[0].innerHTML = ""
		flag1 = true;
	}
	if(!regemail.test(email.value)){
		check[1].innerHTML = "*邮箱格式不对"
		flag2 = false;
	}
	else{
		check[1].innerHTML = ""
		flag2 = true;
	}
	if(!regpassword.test(pass1.value)){
		check[2].innerHTML = "*密码至少8位"
		flag3 = false;
	}
	else{
		check[2].innerHTML = ""
		flag3 = true;
	}
	if(pass1.value !== pass2.value){
		check[3].innerHTML = "*密码不一致"
		flag4 = false;
	}
	else{
		check[3].innerHTML = ""
		flag4 = true;
	}
	if(flag1 && flag2 && flag3 && flag4){
		localStorage.setItem(user.value,pass1.value);
		alert("注册成功！");
		window.open("../index.html");
	}
}
submit.addEventListener("click",t);



