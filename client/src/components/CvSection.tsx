import React from "react";
import TextWithSvg from "../components/TextWithSvg";

import waypoint from "../images/waypoint.svg";
import circle from "../images/circle.svg";

import CvItem from "../components/CvItem";

export default function CvSection({ title, svg, array }) {
	return (
		<div className="flex">
			<div>
				<TextWithSvg
					title={title}
					Tag="h4"
					svg={svg}
					styleDiv=""
					styleSvg="w-6"
				/>

				<div className="flex mt-4">
					<div className="flex flex-col items-center flex-shrink-0">
						<img
							className="w-6 z-10 "
							src={waypoint}
							alt="waypoint"
						/>
						<div className="w-1 h-full bg-minimalist-yellow"></div>
						<img className="w-6" src={circle} alt="circle" />
					</div>

					<div className="flex-col ">
						{array.map((cvItem, index) => (
							<div key={index} className="py-1">
								<CvItem
									timespan={cvItem.timespan}
									text={cvItem.text}
									location={cvItem.location}
									title={cvItem.title}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
