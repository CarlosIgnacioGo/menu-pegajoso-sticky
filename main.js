var menu = document.getElementById('menu');
var altura = document.getElementById('menu').offsetTop;
var p = document.getElementById('primer-p');

addEventListener('scroll',function(){
	if (window.scrollY > altura){
		menu.className = " menu-fixed";
		p.style.marginTop = "69px";
	}else{
		menu.className = "";
		p.style.marginTop = "";
	}
});

