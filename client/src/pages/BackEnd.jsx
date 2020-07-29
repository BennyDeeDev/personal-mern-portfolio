import React, { useState, useEffect } from "react";
import Save from "../components/builder/Save";
import BuilderSection from "../sections/builder/BuilderSection";
import { v4 as uuidv4 } from "uuid";

import BuildComponent from "../components/builder/BuildComponent";
import Input from "../components/builder/Input";
import Upload from "../components/builder/Upload";
import StrengthBuilder from "../sections/builder/StrengthBuilder";

//TODO: Datepicker anstatt Time Span Input; floating label
export default function BackEnd() {
	const initData = {
		strengths: [
			{
				id: uuidv4(),
				svg: null,
				title: "minimalistisch",
				text: "kein clutter"
			}
		],
		skills: [
			{
				id: uuidv4(),
				svg: null,
				text: "React",
				progress: "80%"
			}
		],
		cv: [
			{
				id: uuidv4(),
				title: "Praktikum in der Frontend Entwicklung",
				timespan: "2020 Mai - 2020 August",
				location: "WebSix GmbH in Backnang",
				text:
					"Pflegen von Landing Pages mit HTML, Stylen von Landing Pages mit Tailwind CSS und/oder Sass, Programmierung eines Beleg-Prüfers in Vue.js",
				tags: ["Frontend"]
			}
		]
	};

	const [data, setData] = useState(initData);

	useEffect(() => {
		setData(initData);
	}, []);

	const handleAdd = section => {
		if (!section || !data) return;
		setData({ ...data, [section]: [...data[section], { id: uuidv4() }] });
	};

	const handleDelete = (id, section) => {
		console.log(section, data[section]);
		if (!section || !data) return;
		setData({
			...data,
			[section]: data[section].filter(item => item.id !== id)
		});
	};

	console.log(data);

	return (
		<div className="max-w-screen-xl px-4 py-8">
			<div className=" max-w-screen-md bg-gray-300 p-4">
				<div className="flex items-center relative">
					<h1>Backend Page Builder</h1>
					<div className="absolute right-0">
						<Save padding="p-3" />
					</div>
				</div>
				<StrengthBuilder
					onDelete={id => handleDelete(id, "strengths")}
					onAdd={handleAdd}
					strengths={data.strengths}
				></StrengthBuilder>

				<BuilderSection
					title="Add your cv here"
					max={999}
				></BuilderSection>
			</div>
		</div>
	);
}
