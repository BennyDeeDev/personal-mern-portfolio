import React from "react";

import BuilderSection from "../../sections/builder/BuilderSection";
import BuildComponent from "../../components/builder/BuildComponent";
import Input from "../../components/builder/Input";
import Upload from "../../components/builder/Upload";

export default function StrengthBuilder({ onAdd, onDelete, strengths }) {
	//TODO: abstract data passing (s to parent) https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3
	return (
		<div>
			<BuilderSection
				title="Add a strength here (3 max):"
				/* max={3} */
				onAdd={onAdd}
				section={"strengths"}
			>
				{strengths.map((s, index) => (
					<BuildComponent key={index} onDelete={onDelete} id={s.id}>
						<Input value={s.title || ""} placeholder="Title" />
						<Upload />
						<Input value={s.text || ""} placeholder="Text" />
					</BuildComponent>
				))}
			</BuilderSection>
		</div>
	);
}
