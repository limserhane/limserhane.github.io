const nav_angle = 5;

var nav = document.getElementsByClassName("nav")[0];
var nav_links = document.getElementsByClassName("nav-link");
var nav_call = document.getElementsByClassName("nav-call")[0];

function openNav() {
	nav.style.height = "100%";

	for (const nav_link of nav_links) {
		nav_link.style.opacity = "1";
	}
}

function closeNav() {
	nav.style.height = "0%";

	for (const nav_link of nav_links) {
		nav_link.style.opacity = "0";
	}
}

nav_call.addEventListener("mouseenter", openNav);
nav.addEventListener("mouseleave", closeNav);
