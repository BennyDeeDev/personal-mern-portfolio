import React from "react";
import save from "../../images/save.svg";

export default function Save({ padding }) {
	return (
		<div className="">
			<button
				className={`w-full flex items-center justify-center ${padding}  rounded-lg text-black bg-minimalist-lime `}
			>
				<img className="w-4" src={save} alt="" />
			</button>
		</div>
	);
}
