import React, { useState } from "react";
import add from "../../images/add.svg";
import BuildComponent from "../../components/builder/BuildComponent";

export default function BuilderSection({ title, max, children }) {
	const [counter, setItem] = useState(1);

	const countItems = () => {
		let items = [];

		for (let i = 0; i < counter; i++) {
			if (i < max)
				items.push(
					<BuildComponent
						index={i}
						key={i}
						onDelete={setItem(counter)}
					>
						{children}
					</BuildComponent>
				);
		}
		return items;
	};
	return (
		<div>
			<hr className="w-full h-px mt-8  bg-minimalist-brown" />
			<h4 className="pb-2 pt-4">{title}</h4>
			{countItems()}
			<button
				onClick={() => setItem(counter + 1)}
				className="w-full p-2 bg-minimalist-teal bg-opacity-75 rounded-lg text-white flex items-center justify-center hover:bg-opacity-100 transition duration-150 ease-in-out"
			>
				<img className="w-6" src={add} alt="" />
			</button>
		</div>
	);
}
