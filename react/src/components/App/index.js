import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./styles.css";

import {Header, Home, About} from "../";

function App() {
	return (
		<Router>
			<div className="app-container">
				<Header />
				<Switch>
					<Route path="/about" component={About} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
