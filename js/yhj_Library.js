    function openShutManager(oSourceObj,oTargeObj,shutAble,oOpenTip,oShutTip){
            var sourceObj=typeof oSourceObj=="string"?document.getElementById(oSourceObj):oSourceObj;
            var targeObj=typeof oTargeObj=="string"?document.getElementById(oTargeObj):oTargeObj;
            var openTip=oOpenTip||"";
            var shutTip=oShutTip||"";
            if(targeObj.style.display!="none"){
                if(shutAble) return;
                targeObj.style.display="none";
                if(openTip&&shutTip){
                    sourceObj.innerHTML=shutTip;
                }
            }else{
                targeObj.style.display="block";
                if(openTip&&shutTip){
                    sourceObj.innerHTML=openTip;
                }
            }
        }
		 function  getD1(){
         var date=new Date();
         var d1=date.toLocaleString();
         document.getElementById("datetime").innerHTML =d1; 
     }
 
     setInterval("getD1();",1000);function openShutManager(oSourceObj,oTargeObj,shutAble,oOpenTip,oShutTip){
            var sourceObj=typeof oSourceObj=="string"?document.getElementById(oSourceObj):oSourceObj;
            var targeObj=typeof oTargeObj=="string"?document.getElementById(oTargeObj):oTargeObj;
            var openTip=oOpenTip||"";
            var shutTip=oShutTip||"";
            if(targeObj.style.display!="none"){
                if(shutAble) return;
                targeObj.style.display="none";
                if(openTip&&shutTip){
                    sourceObj.innerHTML=shutTip;
                }
            }else{
                targeObj.style.display="block";
                if(openTip&&shutTip){
                    sourceObj.innerHTML=openTip;
                }
            }
        }
		
 function  getD1(){
             var date=new Date();
             var d1=date.toLocaleString();
             document.getElementById("datetime").innerHTML =d1;
            }
			setInterval("getD1();",1000);
			
var newsImg = document.getElementsByClassName("dongtai_left_img")[0];
var dongtai_content = document.getElementsByClassName("dongtai_content")[0];
var gametime = document.getElementById("gametime");
var t1 = Math.floor(Math.random() * 1000);
var t2 = Math.floor(Math.random() * 1000);
var t3 = Math.floor(Math.random() * 1000);
var t4 = Math.floor(Math.random() * 1000);
var t5 = Math.floor(Math.random() * 1000);
gametime.innerHTML = t5;
function th(){
	var imgs = document.querySelectorAll(".imgs")[0];
	document.getElementById("div2").style.backgroundImage="url('../img/helltaker.jpg')";
	newsImg.src = '../img/helltaker.jpg';
	dongtai_content.innerHTML = "欢迎游玩HellTaker"
	gametime.innerHTML = t1;
}
function HK(){
	var imgs = document.querySelectorAll(".imgs")[1];
	document.getElementById("div2").style.backgroundImage="url("+"../img/zy1-game1.jpg"+")";
	newsImg.src = '../img/zy1-game1.jpg';
	dongtai_content.innerHTML = "欢迎游玩空洞骑士"
	gametime.innerHTML = t2;
}
function AA(){
	var imgs = document.querySelectorAll(".imgs")[2];
	document.getElementById("div2").style.backgroundImage="url("+"../img/yhj.Aaa.jpg"+")";
	newsImg.src = '../img/yhj.Aaa.jpg';
	dongtai_content.innerHTML = "欢迎游玩Another Adventure"
	gametime.innerHTML = t3;
}
function ey(){
	var imgs = document.querySelectorAll(".imgs")[3];
		document.getElementById("div2").style.backgroundImage="url("+"../img/yhj.title-text-1080.jpeg"+")";
		newsImg.src = '../img/yhj.title-text-1080.jpeg';
		dongtai_content.innerHTML = "欢迎游玩Goose Goose Duck"
		gametime.innerHTML = t4;
}
function cs(){
	var imgs = document.querySelectorAll(".imgs")[4];
		document.getElementById("div2").style.backgroundImage="url("+"../img/yhj.header_keyart.png"+")";
		newsImg.src = '../img/yhj.header_keyart.png';
		dongtai_content.innerHTML = "欢迎游玩CSGO"
		gametime.innerHTML = t5;
}
const addtable = document.querySelector("table");
		const add = document.querySelector(".submit");
		const tbody = document.querySelector("tbody");
		
		addtable.addEventListener("submit",function(event){
			event.preventDefault()
		})
add.addEventListener("click",function(){
			console.log(111);
			const neirong = document.querySelector("#comments").value;
			
			
			const tr = document.createElement("tr");
			tr.innerHTML=`
			<td><img src="../img/headIcon.jpg" width=50></td>
			<td>${neirong}</td>
			`
			tbody.prepend(tr)
})