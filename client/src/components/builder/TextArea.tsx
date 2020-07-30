import React, { useState, useEffect } from "react";

export default function TextArea({ value, placeholder }) {
	const [input, setInput] = useState("");

	useEffect(() => {
		setInput(value);
	}, [value]);

	return (
		<div className="py-2">
			<textarea
				onChange={e => setInput(e.target.value)}
				value={input}
				className="form-textarea p-2 w-full rounded-lg"
				placeholder={placeholder}
			/>
		</div>
	);
}
