import React from "react";
import TextWithSvg from "./TextWithSvg";

export default function HeadTitle({ title, svg }) {
	return (
		<div>
			<TextWithSvg
				title={title}
				svg={svg}
				styleDiv="items-center text-center underline justify-center  mb-8"
				styleSvg="w-8"
				Tag="h1"
			/>
		</div>
	);
}
