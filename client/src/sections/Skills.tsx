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
import HeadTitle from "../components/HeadTitle";

export default function Skills() {
	return (
		<div id="skills">
			<HeadTitle svg={skill} title="Meine Fähigkeiten">
				<p></p>
			</HeadTitle>

			<div className="flex justify-between space-x-4">
				<div className="flex flex-grow p-4 bg-gray-300 rounded-lg border border-minimalist-teal shadow-md">
					<SkillSection array={skillsMock.frontend} svg={frontend} title="Front End Entwicklung">
						Ich benutze HTML, CSS und JavaScript um attraktive und responsive Webseiten auf zu bauen. Meine
						Expertise liegen in den Frontend Frameworks mit denen man skalierbare, dynamische Webseiten
						aufbaut.
					</SkillSection>
				</div>
				<div className="flex flex-grow p-4 bg-gray-200 rounded-lg shadow-md">
					<SkillSection array={skillsMock.backend} svg={backend} title="Back End Entwicklung">
						Um ein besserer Entwickler zu werden muss ich auch verstehen was außerhalb meiner Expertise
						liegt, deswegen bilde ich mich auch im Backend weiter.
					</SkillSection>
				</div>
				<div className="flex flex-grow p-4 bg-gray-200 rounded-lg shadow-md">
					<SkillSection array={skillsMock.general} svg={internet} title="Allgemein">
						Ohne Developer Tools geht es nicht mehr, pull requests mit GitLab oder multi line editing in Vs
						Code, machen das Leben eines Entwicklers einfacher.
					</SkillSection>
				</div>
			</div>
		</div>
	);
}
