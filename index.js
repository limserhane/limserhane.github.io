const nav_angle = 5;

var isNavOpen = false;

var nav = document.getElementsByClassName("nav")[0];
var nav_links = document.getElementsByClassName("nav-link");
var nav_call = document.getElementsByClassName("nav-call")[0];

function openNav(){
	nav.style.width = "10em";

	for(const nav_link of nav_links){
		nav_link.style.opacity = "1";
	}

	isNavOpen = true;
}
function closeNav(){
	nav.style.width = "0";

	for(const nav_link of nav_links){
		nav_link.style.opacity = "0";
	}

	isNavOpen = false;
}

function toggleNav(){
	isNavOpen?closeNav():openNav();
}

nav_call.addEventListener("mouseenter", openNav);
nav.addEventListener("mouseleave", closeNav);

