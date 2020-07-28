import React from "react";
import Input from "../components/builder/Input";
import Upload from "../components/builder/Upload";
import BuilderSection from "../sections/builder/BuilderSection";

//TODO: Datepicker anstatt Time Span Input; floating label
export default function BackEnd() {
	return (
		<div className="max-w-screen-xl px-4 py-8">
			<div className="bg-gray-300 p-4 w-1/2">
				<h1>Backend Page Builder</h1>
				<BuilderSection title="Add a strength here (3 max):" max={3}>
					<Input placeholder="Title" />
					<Upload />
					<Input placeholder="Text" />
				</BuilderSection>
				<BuilderSection title="Add your cv here" max={999}>
					<Input placeholder="Title" />
					<Input placeholder="Time Span (e.g 2020 August - 2020 December)" />
					<Input placeholder="Location (e.g Silicon Valley at Microsoft)" />
					<div className="py-2">
						<textarea
							className="rounded-lg w-full p-4"
							placeholder="Job Description (e.g writing vue-components for GitHub)"
						/>
					</div>
				</BuilderSection>
			</div>
		</div>
	);
}
