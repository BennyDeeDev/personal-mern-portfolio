import React from "react";
import TextWithSvg from "./TextWithSvg";
import stackSvg from "../images/stack-overflow.svg";

export default function Stack({ stack }) {
	return (
		<div>
			<hr className="border border-minimalist-lime my-2" />
			<div className="flex">
				<TextWithSvg Tag="h6" styleSvg="w-4 h-4" styleDiv="flex-shrink-0" title={"Stack:"} svg={stackSvg} />
				<div className="flex flex-wrap items-center space-x-4 whitespace-no-wrap ml-2">
					{stack.map((s) => (
						<TextWithSvg Tag="p" styleSvg="w-4 h-4" styleDiv="" title={s.title} svg={s.svg} />
					))}
				</div>
			</div>
		</div>
	);
}
