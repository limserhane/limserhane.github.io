
var isNavOpen = false;

var nav = document.getElementsByTagName("nav")[0];

function openNav(){
	nav.style.width = "20vw";
	nav.style.right = -Math.sin(10*2*Math.PI/360)*100+"vh";
	nav.style.transform = "rotate(10deg)";
	isNavOpen = true;
}
function closeNav(){
	nav.style.width = "0";
	nav.style.right = "0";
	nav.style.transform = "rotate(0deg)";
	isNavOpen = false;
}

function toggleNav(){
	isNavOpen?closeNav():openNav();
}

nav.addEventListener("mouseenter", openNav);
nav.addEventListener("mouseleave", closeNav);

