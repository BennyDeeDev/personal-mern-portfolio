import React from "react";
import SkillItem from "./SkillItem";
import TextWithSvg from "../components/TextWithSvg";

export default function SkillSection({ title, array, svg, children }) {
	return (
		<div className="flex-grow">
			<TextWithSvg Tag="h2" styleDiv="" styleSvg="w-6" title={title} svg={svg} />
			{children}
			{array.map((skill, index) => (
				<SkillItem key={index} text={skill.text} svg={skill.svg} progress={skill.progress} />
			))}
		</div>
	);
}
