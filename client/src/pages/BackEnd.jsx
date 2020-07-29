import React, { useState, useEffect } from "react";
import Save from "../components/builder/Save";
import BuilderSection from "../sections/builder/BuilderSection";
import { v4 as uuidv4 } from "uuid";

import BuildComponent from "../components/builder/BuildComponent";
import Input from "../components/builder/Input";
import Upload from "../components/builder/Upload";

//TODO: Datepicker anstatt Time Span Input; floating label
export default function BackEnd() {
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
		<div className="max-w-screen-xl px-4 py-8">
			<div className=" max-w-screen-md bg-gray-300 p-4">
				<div className="flex items-center relative">
					<h1>Backend Page Builder</h1>
					<div className="absolute right-0">
						<Save padding="p-3" />
					</div>
				</div>
				<BuilderSection
					title="Add a strength here (3 max):"
					max={3}
					onAdd={handleAdd}
				>
					{strengths.map((d, index) => (
						<BuildComponent
							key={index}
							onDelete={handleDelete}
							id={d.id}
						>
							<Input value={d.strength} placeholder="Title" />
							<Upload />
							<Input value={d.text} placeholder="Text" />
						</BuildComponent>
					))}
				</BuilderSection>

				<BuilderSection
					title="Add your cv here"
					max={999}
				></BuilderSection>
			</div>
		</div>
	);
}
