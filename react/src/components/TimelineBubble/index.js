import React from "react";

import "./styles.css";

function TimelineBubble({orientation, content: {title, period, description}}) {
	return (
		<div className={`bubble-container ${orientation}`}>
			<div className="bubble">
				<p className="bubble__title">{title}</p>
				<p className="bubble__period">{period}</p>
				<p className="bubble__content">{description}</p>
			</div>
		</div>
	);
}

export default TimelineBubble;
