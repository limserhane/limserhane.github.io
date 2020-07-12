

var nav_links = document.getElementsByClassName("nav-link");
var nav_back = document.getElementsByClassName("nav-back")[0];
var nav_middle = document.getElementsByClassName("nav-middle")[0];
var nav_front = document.getElementsByClassName("nav-front")[0];

function openNav() {
	nav_middle.style.height = "102%";
	nav_front.style.height = "102%";

	for (const nav_link of nav_links) {
		nav_link.style.opacity = "1";
	}
}

function closeNav() {
	nav_middle.style.height = "0%";
	nav_front.style.height = "0%";

	for (const nav_link of nav_links) {
		nav_link.style.opacity = "0";
	}
}

nav_back.addEventListener("mouseenter", openNav);
nav_front.addEventListener("mouseleave", closeNav);
