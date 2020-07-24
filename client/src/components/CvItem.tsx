import React from "react";
import TextWithSvg from "./TextWithSvg";
import pin from "../images/pin.svg";
import calendar from "../images/calendar.svg";

export default function cvItem({ timespan, text, location, title }) {
	return (
		<div className="flex items-center">
			<div className="w-4 h-1 rounded-full bg-minimalist-gray flex-shrink-0"></div>
			<div className="flex flex-grow my-4 ml-2 bg-gray-300 rounded-lg flex-shrink">
				<div className="m-4">
					<TextWithSvg
						Tag="h4"
						styleSvg="w-4"
						styleDiv="py-1"
						title={title}
						svg={null}
					/>
					<TextWithSvg
						Tag="h5"
						styleSvg="w-4"
						styleDiv="py-1"
						title={location}
						svg={pin}
					/>
					<TextWithSvg
						Tag="h6"
						styleSvg="w-4"
						styleDiv="py-1"
						title={timespan}
						svg={calendar}
					/>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
}
