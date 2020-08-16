import React from "react";
import SkillItem from "./SkillItem";
import TextWithSvg from "../components/TextWithSvg";

export default function SkillSection({ title, array, svg, children }) {
	return (
		<div className="flex justify-between flex-col flex-grow">
			<div>
				<TextWithSvg Tag="h2" styleDiv="whitespace-no-wrap" styleSvg="w-6" title={title} svg={svg} />
				<div className=" xl:h-32">{children}</div>
			</div>
			<div className="mb-auto">
				{array.map((skill, index) => (
					<SkillItem key={index} text={skill.text} svg={skill.svg} progress={skill.progress} />
				))}
			</div>
		</div>
	);
}
