import React, { useState, useEffect, Suspense } from "react";
import Save from "../components/builder/Save";
import { v4 as uuidv4 } from "uuid";

import Input from "../components/builder/Input";
import Upload from "../components/builder/Upload";
import BuilderSection from "../sections/builder/BuilderSection";
import TextArea from "../components/builder/TextArea";
import BackendService from "../services/BackendService";
import { isEmpty } from "lodash";

export default function BackEnd() {
	/* 	const initData = {
		strengths: [
			{
				id: uuidv4(),
				image: null,
				title: "minimalistisch",
				text: "kein clutter",
			},
		],
		skills: [
			{
				id: uuidv4(),
				image: null,
				text: "React",
				progress: "80%",
			},
		],
		cv: [
			{
				id: uuidv4(),
				title: "Praktikum in der Frontend Entwicklung",
				timespan: "2020 Mai - 2020 August",
				location: "WebSix GmbH in Backnang",
				text:
					"Pflegen von Landing Pages mit HTML, Stylen von Landing Pages mit Tailwind CSS und/oder Sass, Programmierung eines Beleg-Prüfers in Vue.js",
				tags: ["Frontend"],
			},
		],
	}; */

	const [state, setState] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await BackendService.getUserData();
			console.log(data, "data");
			setState(data);
		};
		fetchData();
	}, []);

	const handleAdd = (section) => {
		if (!section || !state) return;
		setState({ ...state, [section]: [...state[section], { id: uuidv4() }] });
	};

	const handleDelete = (id, section) => {
		if (!section || !state) return;
		setState({
			...state,
			[section]: state[section].filter((item) => item.id !== id),
		});
	};

	const handleUpload = (e, id, section) => {
		let copyOfArray = [...state[section]];

		let indexOfData = copyOfArray.findIndex((d) => d.id === id);
		copyOfArray[indexOfData] = {
			...copyOfArray[indexOfData],
			image: e.target.files[0],
		};
		setState({
			...state,
			[section]: copyOfArray,
		});
	};
	console.log(state.strengths);

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
					/* max={3} */
					onAdd={handleAdd}
					section={"strengths"}
					onDelete={(id) => handleDelete(id, "strengths")}
					state={state.strengths}
					render={(d) => (
						<div>
							<Input value={d.title} placeholder="Title" />
							<Upload id={d.id} onUpload={handleUpload} section={"strengths"} />
							<div className="text-2xl text-green-800">{d.image ? d.image.name + " uploaded" : null}</div>
							<Input value={d.text} placeholder="Text" />
						</div>
					)}
				/>
				<BuilderSection
					title="Add your cv here:"
					/* max={3} */
					onAdd={handleAdd}
					section={"cv"}
					onDelete={(id) => handleDelete(id, "cv")}
					state={state.cv}
					render={(d) => (
						<div>
							<Input value={d.title || ""} placeholder="Your Job (e.g Frontend Developer at Microsoft)" />
							<Input
								value={d.timespan || ""}
								placeholder="Timespan of the job (e.g August 2020 - December 2020"
							/>
							<Input value={d.location || ""} placeholder="Location of the job(e.g San Francisco)" />
							<Upload onUpload={handleUpload} />
							<TextArea
								value={d.text || ""}
								placeholder="Job Description (e.g programmed Vue Components for new GitHub SPA"
							/>
						</div>
					)}
				/>

				<BuilderSection
					title="Add your skills here"
					onAdd={handleAdd}
					section={"skills"}
					onDelete={(id) => handleDelete(id, "cv")}
					state={state.skills}
					render={(d) => (
						<div>
							<Input value={d.text || ""} placeholder="List your Skill here" />
							<Upload onUpload={handleUpload} />
							<Input value={d.progress || ""} placeholder="rate yourself from 0 to 100%" />
						</div>
					)}
				/>
			</div>
		</div>
	);
}
