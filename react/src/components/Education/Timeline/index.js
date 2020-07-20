import React from "react";

import "./styles.css";

import Episode from "./Episode"

function Timeline() {
	return (
		<div className="timeline">
            <div className="episode-container left">
                <Episode title="2015" content="aaa1" />
			</div>
            <div className="episode-container right">
				<Episode title="2014" content="bbb2" />
			</div>
            <div className="episode-container left">
                <Episode title="2013" content="ccc3" />
			</div>
            <div className="episode-container right">
                <Episode title="2012" content="ddd4" />
			</div>
		</div>
	);
}

export default Timeline;
