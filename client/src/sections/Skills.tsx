import React from "react";
import skillsMock from "../mocks/skillsMock";

import skill from "../images/skills.svg";
import TextWithSvg from "../components/TextWithSvg";

import SubTitle from "../components/SubTitle";
import linksMock from "../mocks/linksMock";

import info from "../images/info.svg";
import SkillSection from "../components/SkillSection";

import frontend from "../images/frontend.svg";
import backend from "../images/backend.svg";
import internet from "../images/internet.svg";

export default function Skills() {
	return (
		<div id="skills">
			{/* <SubTitle svg={skill} title="Meine Fähigkeiten" /> */}
			<div className="flex flex-col justify-between md:flex-row">
				<div className="flex-col flex-1 justify-center">
					<div className="bg-gray-300 p-4 mt-3 rounded-lg shadow-md">
						<TextWithSvg svg={info} styleSvg="w-4" title="Interessante Links:" Tag="h6" styleDiv="" />
						{linksMock.map((link, index) => (
							<div className="my-4" key={index}>
								<div className="md:flex">
									<a
										className="md:ml-1 underline text-minimalist-gray"
										href={link.link}
										target="_blank"
										rel="noopener noreferrer">
										<TextWithSvg
											svg={link.svg}
											styleSvg="w-4"
											title={link.title + ":"}
											Tag="p"
											styleDiv=""
										/>
									</a>
								</div>
								<p>{link.text}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex-col flex-grow mt-8 md:ml-12">
					<SkillSection array={skillsMock.frontend} svg={frontend} title="Front End" />
					<SkillSection array={skillsMock.backend} svg={backend} title="Back End" />
					<SkillSection array={skillsMock.general} svg={internet} title="Allgemein" />
				</div>
			</div>
		</div>
	);
}
