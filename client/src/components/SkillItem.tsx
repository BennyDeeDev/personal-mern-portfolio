import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Reveal from "react-reveal/Reveal";

export default function SkillItem({ text, svg, progress }) {
	return (
		<div className="flex my-4">
			<div className="border border-minimalist-gray rounded-lg flex w-full">
				<div className="bg-gray-300 w-24 h-6 flex items-center p-1 rounded-l-lg flex-shrink-0">
					<img className="w-4 h-4" src={svg} alt={text} />
					<span className="text-xs p-2 whitespace-no-wrap">
						{text}
					</span>
				</div>
				<div className="bg-gray-500 w-full h-6">
					<VisibilitySensor>
						<Reveal effect="animateWidth" duration={2000}>
							<div
								className="bg-minimalist-teal h-6"
								style={{ width: progress }}
							></div>
						</Reveal>
					</VisibilitySensor>
				</div>

				<code className="text-xs w-12 px-4 flex items-center">
					{progress}
				</code>
			</div>
		</div>
	);
}
