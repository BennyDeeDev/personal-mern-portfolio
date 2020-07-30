import React, { useState, useEffect } from "react";
import add from "../../images/add.svg";
import next from "../../images/next.svg";
import BuildComponent from "../../components/builder/BuildComponent";

export default function BuilderSection({
	title,
	onAdd,
	section,
	data,
	onDelete,
	render
}) {
	const [collapse, setCollapse] = useState(false);

	useEffect(() => {
		if (!collapse && data.length) setCollapse(true);
		if (data.length === 0) setCollapse(false);
	}, [data]);

	return (
		<div className="mt-4">
			<div className="bg-gray-500 rounded-lg p-4">
				<div className="flex items-center relative pb-2">
					<h4 className=" text-white ">{title}</h4>
					<button
						className="bg-white rounded-full absolute right-0 p-1"
						disabled={data}
					>
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
				<div>
					{collapse
						? data.map((d, index) => (
								<BuildComponent
									key={index}
									onDelete={onDelete}
									id={d.id}
								>
									{render(d)}
								</BuildComponent>
						  ))
						: null}
				</div>
				{
					<button
						onClick={() => onAdd(section)}
						className="w-full p-2 bg-minimalist-teal bg-opacity-75 rounded-lg text-white flex items-center justify-center hover:bg-opacity-100 transition duration-150 ease-in-out"
					>
						<img className="w-6" src={add} alt="" />
					</button>
				}
				{/* <Save padding="p-3" /> */}
			</div>
		</div>
	);
}
