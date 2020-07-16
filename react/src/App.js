import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" />
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>+1</button>
		</div>
	);
}

export default App;
