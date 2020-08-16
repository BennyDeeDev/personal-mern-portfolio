import React from "react";
import TextWithSvg from "../components/TextWithSvg";

import waypoint from "../images/waypoint.svg";
import circle from "../images/circle.svg";

import CvItem from "../components/CvItem";

export default function CvSection({ title, svg, array, section }) {
	return (
		<div className="flex flex-col">
			<TextWithSvg title={title} Tag="h4" svg={svg} styleDiv="" styleSvg="w-6" />

			<div className="flex  mt-4">
				<div className="flex flex-col items-center flex-shrink-0">
					<img className="w-6 z-10 -mb-1" src={waypoint} alt="waypoint" />
					<div className="w-1 h-full bg-minimalist-lime"></div>
					<img className="w-6" src={circle} alt="circle" />
				</div>

				<div className="flex flex-col justify-between">
					{array.map((cvItem, index) => (
						<div key={index} className="py-1 ">
							<CvItem
								section={section}
								timespan={cvItem.timespan}
								text={cvItem.text}
								location={cvItem.location}
								title={cvItem.title}
								stack={cvItem.stack}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
