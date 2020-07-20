import React from "react";

import "./styles.css";

import TimelineBubble from "../TimelineBubble";

function Timeline() {
	return (
		<div className="about-page">
			<h3 className="about-page__title">Timeline</h3>
			<div className="about-page__timeline">
				{timeline.reverse().map((item, index) => (
					<TimelineBubble
						key={item.id}
						orientation={index % 2 === 0 ? "left" : "right"}
						content={item}
					/>
				))}
			</div>
		</div>
	);
}

const timeline = [
	{
		id: "a",
		title: "Maternelle",
		period: "2002-2005",
		description: "Petite section, moyenne section, grande section",
	},
	{
		id: "b",
		title: "Primaire",
		period: "2005-2010",
		description: "Ecole primaire, CP, CE1, CE2, CM1, CM2",
	},
	{
		id: "c",
		title: "Collège",
		period: "2010-2014",
		description: "Collège, 6ème, 5ème, 4ème, 3ème",
	},
	{
		id: "1",
		title: "Baccalauréat",
		period: "2017",
		description: "Baccalauréat Scientifique SVT Spécialité Mathématiques Mention Bien",
	},
	{
		id: "2",
		title: "Cycle préparatoire",
		period: "2017-2019",
		description: "Cycle préparatoire à la formation d'ingénieur",
	},
	{
		id: "3",
		title: "Cycle ingénieur",
		period: "2019-2022",
		description: "Formation au métier d'ingénieur et spécialisation informatique",
	},
];

export default Timeline;
