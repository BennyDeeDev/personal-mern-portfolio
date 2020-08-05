import React from "react";
import TextWithSvg from "./TextWithSvg";

export default function SubTitle({ title, svg }) {
	return (
		<div>
			<TextWithSvg
				title={title}
				svg={svg}
				styleDiv="items-center text-center underline justify-center mt-6 md:mt-12 mb-8"
				styleSvg="w-6"
				Tag="h2"
			/>
		</div>
	);
}
