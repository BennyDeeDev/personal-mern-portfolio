import React, { useState, useEffect } from "react";

export default function Input({ placeholder, value }) {
	const [input, setInput] = useState("");

	useEffect(() => {
		setInput(value);
	}, [value]);

	return (
		<div className="py-2">
			<input
				onChange={e => setInput(e.target.value)}
				value={input}
				className="p-2 w-full rounded-lg"
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);
}
