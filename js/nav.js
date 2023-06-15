let zy1_userName = document.getElementsByClassName("zy1_userName");

let len = zy1_userName.length;

for(let i = 0; i < len; i ++){
	zy1_userName[i].innerHTML = localStorage.getItem("_now_user");
}