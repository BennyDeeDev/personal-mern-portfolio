import React, { useState, useEffect } from "react";
import add from "../../images/add.svg";
import Save from "../../components/builder/Save";
import next from "../../images/next.svg";

//TODO: collapse wenn nichts drinne ist aber hinzugefügt wird
export default function BuilderSection({ title, children, onAdd, section }) {
	/* 	const [items, setItem] = useState([]); */
	const [collapse, setCollapse] = useState(false);

	/* useEffect(() => {
		setItem(data);
	}, [data]); */

	/* 	useEffect(() => {
		if (!collapse && counter === 1) setCollapse(true);
		if (items.length === 0) setCollapse(false);
	}, [items, collapse]); */

	/* const countItems = () => {
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
  }; */

	/* 		const handleAdd = () => {
		setItem([{ id: uuidv4() }, ...items]);
	}; */
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
				<div>
					{collapse
						? /* 	<BuildComponent
									id={id}
									key={index}
									onDelete={handleDelete}
                > */

						  children
						: /* data.map(d => ({ children })) */
						  /* 	</BuildComponent> */

						  null}
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
