import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Header() {
	return (
		<nav>
			<Link to="/">
				<h1>/home/limserhane</h1>
			</Link>
			<ul>
				<Link to="/formation">
					<li>Formation</li>
				</Link>
				<li>Expériences professionnelles</li>
				<li>Compétences</li>
				<li>Projets</li>
			</ul>
		</nav>
	);
}

export default Header;
