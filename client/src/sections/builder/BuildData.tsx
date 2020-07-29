/* import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


export default function BuildData() {
	let initialStrengths = [
		{
			id: uuidv4(),
			strength: "minimalistisch",
			text: "kein clutter"
		}
	];

	const [strengths, setStrengths] = useState([]);

	useEffect(() => {
		setStrengths(initialStrengths);
	}, []);

	let cv = [
		{
			id: uuidv4(),
			title: "Praktikum in der Frontend Entwicklung",
			timespan: "2020 Mai - 2020 August",
			location: "WebSix GmbH in Backnang",
			text:
				"Pflegen von Landing Pages mit HTML, Stylen von Landing Pages mit Tailwind CSS und/oder Sass, Programmierung eines Beleg-Prüfers in Vue.js"
		}
	];

	const handleAdd = () => {
		setStrengths([...strengths, { id: uuidv4() }]);
		console.log(strengths);
	};

	const handleDelete = id => {
		if (strengths.length > 0)
			setStrengths(strengths.filter(item => item.id !== id));
	};

	return (
		<div>
			{strengths.map((d, index) => (
				<BuildComponent key={index} onDelete={handleDelete} id={d.id}>
				
				</BuildComponent>
			))}
		</div>
	);
}
 */

import React from "react";

export default function BuildData() {
	return <div></div>;
}
