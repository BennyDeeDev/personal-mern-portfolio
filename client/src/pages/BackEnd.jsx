import React, { useState, useEffect } from "react";
import Save from "../components/builder/Save";
import { v4 as uuidv4 } from "uuid";

import Input from "../components/builder/Input";
import Upload from "../components/builder/Upload";
import BuilderSection from "../sections/builder/BuilderSection";
import TextArea from "../components/builder/TextArea";
import BackendService, { api } from "../services/BackendService";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";

export default function BackEnd() {
	const [logOut, setLogOut] = useState(false);

	api.interceptors.response.use(
		(res) => res,
		(err) => {
			if (err.response.status === 401) {
				setLogOut(true);
			}
			return Promise.reject(err);
		}
	);

	const [state, setState] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await BackendService.fetchUserData();

			setState(data);
		};
		fetchData();
	}, []);

	const handleAdd = (section, fields) => {
		setState({ ...state, [section]: [...state[section], fields] });
	};

	const handleDelete = (id, section) => {
		setState({
			...state,
			[section]: state[section].filter((item) => item.id !== id),
		});
	};

	const handleUpload = (e, id, section) => {
		const imageForm = new FormData();
		imageForm.append("image", e.target.files[0]);

		BackendService.uploadImage(imageForm).then(({ data }) => {
			let copyOfArray = [...state[section]];

			let indexOfData = copyOfArray.findIndex((d) => d.id === id);
			copyOfArray[indexOfData] = {
				...copyOfArray[indexOfData],
				image: { name: data.file.originalname, fieldname: data.file.filename },
			};
			setState({
				...state,
				[section]: copyOfArray,
			});

			/* //Hacky Way of dynamically showing images when uploading, --> Backend needs to send when done uploading
			setTimeout(() => {
				const img = require.context("../images/", true);
				let i = img("./" + data.file.filename);
				setImage(i);
			}, 5000); */
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

	//TODO: https://stackoverflow.com/questions/27864951/how-to-access-childs-state-in-react
	return (
		<div className="max-w-screen-xl px-4 py-8">
			{logOut ? <Redirect to="/login" /> : null}

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
					onAdd={() => handleAdd("strengths", { id: uuidv4(), title: "", text: "" })}
					section={"strengths"}
					onDelete={(id) => handleDelete(id, "strengths")}
					state={state.strengths}
					render={(d) => (
						<div>
							<Input value={d.title} placeholder="Title" />
							<Upload id={d.id} onUpload={handleUpload} section={"strengths"} image={d.image} />

							<Input value={d.text} placeholder="Text" />
						</div>
					)}
				/>

				<BuilderSection
					title="Add your skills here"
					onAdd={() => handleAdd(["text", "id", "progress"])}
					section={"skills"}
					onDelete={(id) => handleDelete(id, "skills")}
					state={state.skills}
					render={(d) => (
						<div>
							<Input value={d.text || ""} placeholder="List your Skill here" />
							<Upload id={d.id} onUpload={handleUpload} section={"skills"} image={d.image} />
							<Input value={d.progress || ""} placeholder="rate yourself from 0 to 100%" />
						</div>
					)}
				/>

				<BuilderSection
					title="Add your work here:"
					/* max={3} */
					onAdd={() => handleAdd(["title", "timespan", "location"])}
					section={"work"}
					onDelete={(id) => handleDelete(id, "work")}
					state={state.work}
					render={(d) => (
						<div>
							<Input value={d.title || ""} placeholder="Your Job (e.g Frontend Developer at Microsoft)" />
							<Input
								value={d.timespan || ""}
								placeholder="Timespan of the job (e.g August 2020 - December 2020"
							/>
							<Input value={d.location || ""} placeholder="Location of the job(e.g San Francisco)" />

							<TextArea
								value={d.text || ""}
								placeholder="Job Description (e.g programmed Vue Components for new GitHub SPA"
							/>
						</div>
					)}
				/>

				<BuilderSection
					title="Add your education here:"
					/* max={3} */
					onAdd={() => handleAdd(["location", "timespan", "text"])}
					section={"education"}
					onDelete={(id) => handleDelete(id, "education")}
					state={state.education}
					render={(d) => (
						<div>
							<Input
								value={d.location || ""}
								placeholder="Location of your university or school(e.g Stanford)"
							/>
							<Input value={d.timespan || ""} placeholder="Timespan (e.g August 2020 - December 2023" />

							<TextArea
								value={d.text || ""}
								placeholder="Your certification (e.g Bachelor in Computer Science)"
							/>
						</div>
					)}
				/>
			</div>
		</div>
	);
}
