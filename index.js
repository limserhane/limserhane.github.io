var nav_links = document.getElementsByClassName("nav-link");
var nav_back = document.getElementsByClassName("nav-back")[0];
var nav_middle = document.getElementsByClassName("nav-middle")[0];
var nav_front = document.getElementsByClassName("nav-front")[0];

function openNav() {
	setTimeout(() => {
		nav_middle.style.height = "102%";
	}, 0);
	setTimeout(() => {
		nav_front.style.height = "102%";
	}, 100);
}

function closeNav() {
	setTimeout(() => {
		nav_front.style.height = "0%";
	}, 0);
	setTimeout(() => {
		nav_middle.style.height = "0%";
	}, 100);
}

nav_back.addEventListener("mouseenter", openNav);
nav_front.addEventListener("mouseleave", closeNav);
