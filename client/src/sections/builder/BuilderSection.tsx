import React, { useState } from "react";
import add from "../../images/add.svg";
import BuildComponent from "../../components/builder/BuildComponent";
import Save from "../../components/builder/Save";
import next from "../../images/next.svg";

export default function BuilderSection({ title, max, children }) {
	const [counter, setItem] = useState(1);
	const [collapse, setCollapse] = useState(false);

	const countItems = () => {
		let items = [];

		for (let i = 0; i < counter; i++) {
			if (i < max)
				items.push(
					<BuildComponent
						index={i}
						key={i}
						onDelete={() => setItem(counter - 1)}
					>
						{children}
					</BuildComponent>
				);
		}
		return items;
	};

	//TODO: collapse wenn nichts drinne ist aber hinzugefügt wird
	const handleAdd = () => {
		if (!collapse) setCollapse(true);
		setItem(counter + 1);
	};

	return (
		<div className="mt-4">
			<div className="bg-gray-500 rounded-lg p-4">
				<div className="flex items-center relative pb-2">
					<h4 className=" text-white ">{title}</h4>
					<button className="bg-white rounded-full absolute right-0 p-1 ">
						<img
							onClick={() => setCollapse(!collapse)}
							className={`w-4 transform transition duration-300 ease-in-out ${
								collapse ? "rotate-90" : ""
							}`}
							src={next}
							alt=""
						/>
					</button>
				</div>
				<div>{collapse ? countItems() : null}</div>
				<button
					onClick={() => handleAdd()}
					className="w-full p-2 bg-minimalist-teal bg-opacity-75 rounded-lg text-white flex items-center justify-center hover:bg-opacity-100 transition duration-150 ease-in-out"
				>
					<img className="w-6" src={add} alt="" />
				</button>
				{/* <Save padding="p-3" /> */}
			</div>
		</div>
	);
}
