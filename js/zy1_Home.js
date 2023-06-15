//首页手动切换轮播图//首页自动切换轮播图
let banner1 = document.getElementsByClassName("zy1-home-right-banner");
let banner1_left = document.getElementsByClassName("toLeft1");
let banner1_right = document.getElementsByClassName("toRight1");
let banner1_dot = document.getElementsByClassName("dot");
let section1 = document.getElementsByClassName("section1")[0];
const ban1Len = 2;
let idx1 = 0;


var timer = setInterval(function(){
	banner1[idx1].setAttribute("class","zy1-home-right-banner hide");
	banner1[(idx1-1 + ban1Len) % ban1Len].setAttribute("class","zy1-home-right-banner show");
	banner1_dot[idx1].setAttribute("class","dot");
	banner1_dot[(idx1-1 + ban1Len) % ban1Len].setAttribute("class","dot dot-select");
	idx1 = (idx1 -1 + ban1Len) % ban1Len;
},1500);
section1.addEventListener("mouseenter",function(){
	clearTimeout(timer);
});
section1.addEventListener("mouseleave",function(){
	timer = setInterval(function(){
		banner1[idx1].setAttribute("class","zy1-home-right-banner hide");
		banner1[(idx1-1 + ban1Len) % ban1Len].setAttribute("class","zy1-home-right-banner show");
		banner1_dot[idx1].setAttribute("class","dot");
		banner1_dot[(idx1-1 + ban1Len) % ban1Len].setAttribute("class","dot dot-select");
		idx1 = (idx1 -1 + ban1Len) % ban1Len;
	},1500);
});
for(let i = 0; i < ban1Len; i ++){
	banner1_left[i].addEventListener("click",function(){
		banner1[i].setAttribute("class","zy1-home-right-banner hide");
		banner1[(i-1 + ban1Len) % ban1Len].setAttribute("class","zy1-home-right-banner show");
		banner1_dot[i].setAttribute("class","dot");
		banner1_dot[(i-1 + ban1Len) % ban1Len].setAttribute("class","dot dot-select");
		idx1 = (idx1 -1 + ban1Len) % ban1Len;
	});
	banner1_right[i].addEventListener("click",function(){
		banner1[i].setAttribute("class","zy1-home-right-banner hide");
		banner1[(i+1) % ban1Len].setAttribute("class","zy1-home-right-banner show");
		banner1_dot[i].setAttribute("class","dot");
		banner1_dot[(i+1) % ban1Len].setAttribute("class","dot dot-select");
		idx1 = (idx1+1) % ban1Len;
	});
}







//触摸换照片
let smallImg = document.getElementsByClassName("smallImg");
let bigImg = document.getElementsByClassName("bigImg");
let smallImgLen = smallImg.length;
let bigImgLen = bigImg.length;
let bigImgSrc = new Array;
for(let i = 0; i < bigImgLen; i ++){
	bigImgSrc[i] = bigImg[i].src;
}
for(let i = 0; i < smallImgLen; i ++){
	smallImg[i].addEventListener("mouseenter",function(){
		// console.log(Math.floor(i/4));
		bigImg[Math.floor(i/4)].src = smallImg[i].src;
	});
	smallImg[i].addEventListener("mouseleave",function(){
		bigImg[Math.floor(i/4)].src = bigImgSrc[Math.floor(i/4)];
	});
}
// console.log(smallImgLen);