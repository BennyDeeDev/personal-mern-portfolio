import React from "react";
import strengthsMock from "../mocks/strengthsMock";
import strength from "../images/strength.svg";
import HeadTitle from "../components/HeadTitle";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

export default function Strengths({ data }) {
	console.log(data);
	return (
		<div id="strengths">
			<HeadTitle svg={strength} title="Meine Stärken" />
			<div className="flex flex-col justify-between md:flex-row">
				{data.map((strength, index) => (
					<div key={index}>
						<VisibilitySensor>
							<Fade cascade delay={150} duration={2100}>
								<div className="flex flex-col items-center px-8 pb-8 md:p-0">
									<h2 className="text-3xl">{strength.title}</h2>
									{/* <img
										className="w-32 m-4"
										src={require("../images/" + strength.image.fieldname)}
										alt={strength.title}
									/> */}
									<p className="text-center">{strength.text}</p>
								</div>
							</Fade>
						</VisibilitySensor>
					</div>
				))}
			</div>
		</div>
	);
}
