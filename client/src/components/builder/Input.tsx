import React from "react";

export default function Input({ placeholder }) {
	return (
		<div className="py-2">
			<input
				className="p-2 w-full rounded-lg"
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);
}
