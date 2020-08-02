import React, { useState, useEffect, Suspense } from "react";
import Save from "../components/builder/Save";
import { v4 as uuidv4 } from "uuid";

import Input from "../components/builder/Input";
import Upload from "../components/builder/Upload";
import BuilderSection from "../sections/builder/BuilderSection";
import TextArea from "../components/builder/TextArea";
import BackendService from "../services/BackendService";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function BackEnd() {
	const [state, setState] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await BackendService.fetchUserData();
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

	const handleSave = () => {
		BackendService.saveUserData(state)
			.then(() => {
				toast.success("Data Saved", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			})
			.catch(() =>
				toast.error("Uh, oh something went wrong", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			);
	};

	return (
		<div className="max-w-screen-xl px-4 py-8">
			<div className=" max-w-screen-md bg-gray-300 p-4">
				<div className="flex items-center relative">
					<h1>Backend Page Builder</h1>
					<div className="absolute right-0">
						<Save onSave={handleSave} padding="p-3" />
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
