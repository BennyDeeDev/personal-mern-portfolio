import React from "react";
import TextWithSvg from "./TextWithSvg";
import stackSvg from "../images/stack-overflow.svg";
import Hr from "./Hr";

export default function Stack({ stack }) {
	return (
		<div>
			<Hr />
			<div className="flex justify-between">
				<TextWithSvg Tag="h6" styleSvg="w-4 h-4" styleDiv="flex-shrink-0" title={"Stack:"} svg={stackSvg} />
				<div className="-mx-4 ml-2">
					<div className="flex flex-wrap">
						{stack.map((s, index) => (
							<div key={index}>
								<TextWithSvg Tag="p" styleSvg="w-4 h-4" styleDiv="mx-4" title={s.title} svg={s.svg} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
