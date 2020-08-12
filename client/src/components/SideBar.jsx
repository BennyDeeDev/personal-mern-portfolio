import React, { useState, useEffect } from "react";
import profilepicture from "../images/profilepicture.jpg";

import { Link } from "react-scroll";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function SideBar() {
	const [isBottom, setIsBottom] = useState(false);

	useScrollPosition(({ prevPos, currPos }) => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			setIsBottom(true);
		} else {
			setIsBottom(false);
		}
	});

	const sideBarLinks = [
		{ title: "Home", id: "home" },
		{ title: "Über mich", id: "about" },
		{ title: "Fähigkeiten", id: "skills" },
		{ title: "Udemy Kurse", id: "udemy" },
		{ title: "Coding Challenges", id: "coding-challenges" },
		{ title: "Projekte", id: "projects" },
		{ title: "Lebenslauf", id: "cv" },
		{ title: "Kontakt", id: "contact" },
	];

	return (
		<div className="flex justify-center items-center fixed top-0 left-0 z-50 h-screen w-48 p-4 bg-gray-800  border-r-4 border-minimalist-teal">
			<div className="flex flex-col">
				<div className="flex items-center -mt-32 justify-center">
					<img
						className="object-cover rounded-full border-4 border-minimalist-gray w-32 h-32"
						src={profilepicture}
						alt=""
					/>
				</div>
				<h5 className="text-center mt-4 text-minimalist-lime">Benjamin Derksen</h5>
				<div className="mt-8 space-y-8 text-center text-white">
					{sideBarLinks.map((link, index, array) =>
						isBottom ? (
							index === array.length - 1 ? (
								<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
									<Link activeClass="" to={link.id} spy={true} smooth={true} offset={-25}>
										<p className="opacity-100 text-minimalist-lime transition duration-150 ">
											{link.title}
										</p>
									</Link>
								</div>
							) : (
								<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
									<Link activeClass="" to={link.id} spy={true} smooth={true} offset={-25}>
										<p>{link.title}</p>
									</Link>
								</div>
							)
						) : (
							<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
								<Link
									activeClass="opacity-100 text-minimalist-lime transition duration-150 "
									to={link.id}
									spy={true}
									smooth={true}
									offset={-25}>
									<p>{link.title}</p>
								</Link>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}
