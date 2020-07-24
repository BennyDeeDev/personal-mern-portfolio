import React from "react";
import strengthsMock from "../mocks/strengthsMock";
import strength from "../images/strength.svg";
import HeadTitle from "../components/HeadTitle";
import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

export default function Strengths() {
	return (
		<div id="strengths">
			<HeadTitle svg={strength} title="Meine Stärken" />
			<div className="flex flex-col justify-between md:flex-row">
				{strengthsMock.map((strength, index) => (
					<div key={index}>
						<VisibilitySensor>
							<Fade cascade delay={150} duration={2100}>
								<div className="flex flex-col items-center px-8 pb-8 md:p-0">
									<h2 className="text-3xl">
										{strength.headline}
									</h2>
									<img
										className="w-32 m-4"
										src={strength.svg}
										alt={strength.headline}
									/>
									<p className="text-center">
										{strength.caption}
									</p>
								</div>
							</Fade>
						</VisibilitySensor>
					</div>
				))}
			</div>
		</div>
	);
}
