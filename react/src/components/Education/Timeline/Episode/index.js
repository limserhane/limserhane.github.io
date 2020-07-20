import React from "react";

import "./styles.css";


function Episode({title, content}) {
	return (
        <div className="episode">
            <h1>{title}</h1>
		    <p>{content}</p>
        </div>
	);
}

export default Episode;
