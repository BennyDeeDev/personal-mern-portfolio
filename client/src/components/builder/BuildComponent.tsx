import React from "react";
import close from "../../images/close.svg";

export default function BuildComponent({ children, index, onDelete }) {
	return (
		<div className="flex flex-col bg-gray-600 p-4 rounded-lg mb-6 shadow-md ">
			<div className="flex relative items-center w-full  pb-2">
				<img
					className="absolute right-0 w-4 opacity-50 hover:opacity-100 -mr-2 "
					src={close}
					alt=""
					onClick={() => onDelete(index)}
				/>
			</div>
			{children}
		</div>
	);
}
