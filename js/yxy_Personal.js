
var yxyIN = document.getElementById("yxyIN");
var yxyout = document.getElementById("yxyout");
var sub = document.getElementById("sub");
sub.onclick = function() {
		const div = document.createElement("div");
		div.innerHTML = `
		<div class="box5">
		<img src="../img/headIcon.jpg" width=50 alt="">
		    <p>${yxyIN.value}</p>
		</div>
		`
		
		yxyout.prepend(div)
	}