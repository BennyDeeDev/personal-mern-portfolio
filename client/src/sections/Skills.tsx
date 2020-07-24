import React from "react";
import skillsMock from "../mocks/skillsMock";

import skill from "../images/skills.svg";
import TextWithSvg from "../components/TextWithSvg";
import profilepicture from "../images/profilepicture.jpg";
import user from "../images/user.svg";
import HeadTitle from "../components/HeadTitle";
import linksMock from "../mocks/linksMock";

import info from "../images/info.svg";
import SkillSection from "../components/SkillSection";

import frontend from "../images/frontend.svg";
import backend from "../images/backend.svg";
import internet from "../images/internet.svg";

export default function Skills() {
	return (
		<div id="skills">
			<HeadTitle svg={skill} title="Meine Fähigkeiten" />
			<div className="flex flex-col justify-between md:flex-row">
				<div className="flex-col flex-1 justify-center">
					<div className="bg-gray-300 p-4 mt-3 rounded-lg shadow-md">
						<div className="flex flex-col lg:flex-row">
							<img
								className="object-cover rounded-full border border-minimalist-gray w-48 h-48"
								src={profilepicture}
								alt=""
							/>

							<div className="my-4 lg:m-4">
								<TextWithSvg
									svg={user}
									styleSvg="w-4 -mt-1"
									title="Über mich:"
									Tag="h6"
									styleDiv="my-1 "
								/>
								<p>
									Ich bin ein JavaScript-Entwickler aus
									Waiblingen (Stuttgart). JavaScript ist meine
									Leidenschaft, egal ob dynamisches rendern
									von UI-Komponenten mit React.js oder Backend
									Controller mit Express.js. In meiner
									Freizeit programmiere ich entweder an einem
									aktuellen Projekt oder nehme Kurse für
									meinen Udemy Channel auf.
								</p>
							</div>
						</div>
						<TextWithSvg
							svg={info}
							styleSvg="w-4"
							title="Interessante Links:"
							Tag="h6"
							styleDiv=""
						/>
						{linksMock.map((link, index) => (
							<div className="my-4" key={index}>
								<div className="md:flex">
									<a
										className="md:ml-1 underline text-minimalist-gray"
										href={link.link}
										target="_blank"
										rel="noopener noreferrer"
									>
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
					<SkillSection
						array={skillsMock.frontend}
						svg={frontend}
						title="Front End"
					/>
					<SkillSection
						array={skillsMock.backend}
						svg={backend}
						title="Back End"
					/>
					<SkillSection
						array={skillsMock.general}
						svg={internet}
						title="Allgemein"
					/>
				</div>
			</div>
		</div>
	);
}
