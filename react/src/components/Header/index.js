import React from "react";
import {NavLink} from "react-router-dom";

import "./styles.css";

function Header() {
	return (
		<header className="header">
			<h1>
				<NavLink
					to="/"
					className="header__homelink"
					activeClassName="header__homelink--active"
					exact={true}
				>
					/home/limserhane
				</NavLink>
			</h1>
			<ul>
				<li>Projets</li>
				<li>Compétences</li>
				<li>
					<NavLink
						to="/about"
						className="header__link"
						activeClassName="header__link--active"
					>
						À propos
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
