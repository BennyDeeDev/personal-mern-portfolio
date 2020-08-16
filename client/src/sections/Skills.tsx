import React from "react";
import skillsMock from "../mocks/skillsMock";

import skill from "../images/skills.svg";

import SkillSection from "../components/SkillSection";

import frontend from "../images/frontend.svg";
import backend from "../images/backend.svg";
import internet from "../images/internet.svg";
import HeadTitle from "../components/HeadTitle";

export default function Skills() {
	return (
		<div id="skills">
			<HeadTitle svg={skill} title="Fähigkeiten">
				<p></p>
			</HeadTitle>

			<div className="flex flex-col xl:flex-row justify-between -m-4">
				<div className="flex xl:w-5/12 p-4 m-4 bg-gray-300 rounded-lg shadow-md">
					<SkillSection array={skillsMock.frontend} svg={frontend} title="Frontend Entwicklung">
						<p>
							Ich benutze HTML, CSS und JavaScript um attraktive und responsive Webseiten auf zu bauen.
							Meine Expertise liegen in den Frontend Frameworks mit denen man skalierbare, dynamische
							Webseiten aufbaut.
						</p>
					</SkillSection>
				</div>

				<div className="flex xl:w-1/3 p-4 m-4 bg-gray-200 rounded-lg ">
					<SkillSection array={skillsMock.backend} svg={backend} title="Backend Entwicklung">
						<p>
							Für meine eigenen Projekte braucht ich oft ein Backend, dieses realisiere ich mit Node.js
							und Mongo DB als Datenbank.
						</p>
					</SkillSection>
				</div>
				<div className="flex xl:w-1/3 p-4 m-4 bg-gray-200 rounded-lg ">
					<SkillSection array={skillsMock.general} svg={internet} title="Allgemein">
						<p>
							Ohne Developer Tools geht es nicht mehr, pull requests mit GitLab oder multi line editing in
							Vs Code, machen das Leben eines Entwicklers einfacher.
						</p>
					</SkillSection>
				</div>
			</div>
		</div>
	);
}
