import React from "react";
import strengthsMock from "../mocks/strengthsMock";

import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";
import HeadTitle from "../components/HeadTitle";
import user from "../images/user.svg";
import profilepicture from "../images/profilepicture-small.jpg";
import Hr from "../components/Hr";
import LazyLoad from "react-lazy-load";

export default function AboutMe() {
	return (
		<div id="about">
			<HeadTitle svg={user} title="Über mich">
				<p></p>
			</HeadTitle>

			<div className="flex flex-col-reverse justify-center lg:flex-row">
				<div className="flex flex-col ">
					<div className="flex -m-2 flex-col md:flex-row justify-between">
						{strengthsMock.map((strength, index) => (
							<div
								className="m-2 bg-white p-4 lg:w-64 rounded-lg border border-minimalist-gray"
								key={index}>
								<VisibilitySensor>
									<Fade cascade delay={150} duration={2100}>
										<div className="flex flex-col items-center ">
											<h2>{strength.headline}</h2>
											<img className="w-24 m-4" src={strength.svg} alt={strength.headline} />
											<p className="text-center">{strength.caption}</p>
										</div>
									</Fade>
								</VisibilitySensor>
							</div>
						))}
					</div>
					<div className="flex flex-col mt-4 justify-between lg:flex-row">
						<div className="flex flex-col p-6  justify-between bg-white rounded-lg border border-minimalist-teal ">
							<div className="flex flex-col-reverse md:flex-row">
								<LazyLoad>
									<img
										className="object-cover h-full rounded-lg border-2 border-minimalist-gray my-2 md:my-0 md:mr-4 w-48 p-1 "
										src={profilepicture}
										alt=""
									/>
								</LazyLoad>
								<div className="flex flex-col justify-center  max-w-xl space-y-4">
									<h5 className="text-minimalist-lime">Wer bin ich?</h5>
									<h3>Ich bin Benjamin Derksen, ein ambitionierter JavaScript Entwickler</h3>
									<p>
										Ich arbeite mit state of the art Technologien und lege viel Wert auf die
										Skalierbarkeit meines Codes. JavaScript ist meine Leidenschaft, egal ob
										dynamisches rendern von UI-Komponenten mit React.js oder Backend Controller mit
										Express.js. In meiner Freizeit programmiere ich entweder an einem aktuellen
										Projekt oder nehme Kurse für meinen Udemy Channel auf.
									</p>
								</div>
							</div>

							<Hr />
							<div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
								<div className="flex flex-col md:space-y-4">
									<p>Name: Benjamin Derksen</p>
									<p>Alter: 22</p>
								</div>
								<div className="flex flex-col md:space-y-4">
									<p>geboren am: 18.4.1998 in Unna</p>
									<p>Wohnort: Waiblingen</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
