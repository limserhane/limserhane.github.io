import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

import { Header, Education, Home } from "../";

function App() {
	return (
		<Router>
			<div className="app-container">
				<Header />
				<Switch>
					<Route path="/formation">
						<Education />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
