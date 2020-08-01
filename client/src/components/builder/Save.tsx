import React from "react";
import save from "../../images/save.svg";

export default function Save({ padding, onSave }) {
	return (
		<div className="">
			<button
				onClick={onSave}
				className={`w-full flex items-center justify-center ${padding}  rounded-lg text-black bg-minimalist-lime `}>
				<img className="w-4" src={save} alt="" />
			</button>
		</div>
	);
}
