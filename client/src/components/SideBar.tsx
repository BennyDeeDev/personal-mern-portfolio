import React from "react";
import profilepicture from "../images/profilepicture.jpg";

import { Link } from "react-scroll";

export default function SideBar() {
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
					<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
						<Link
							activeClass="opacity-100 text-minimalist-lime transition duration-150 "
							to={"home"}
							spy={true}
							smooth={true}
							offset={-25}>
							<p>Home</p>
						</Link>
					</div>
					<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
						<Link
							activeClass="opacity-100 text-minimalist-lime transition duration-150"
							to={"about"}
							spy={true}
							smooth={true}
							offset={-25}>
							<p>Über mich</p>
						</Link>
					</div>
					<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
						<Link
							activeClass="opacity-100 text-minimalist-lime transition duration-150"
							to={"skills"}
							spy={true}
							smooth={true}
							offset={-25}>
							<p>Fähigkeiten</p>
						</Link>
					</div>
					<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
						<Link
							activeClass="opacity-100 text-minimalist-lime transition duration-150"
							to={"udemy"}
							spy={true}
							smooth={true}
							offset={-25}>
							<p>Udemy Kurse</p>
						</Link>
					</div>
					<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
						<Link
							activeClass="opacity-100 text-minimalist-lime transition duration-150"
							to={"coding-challenges"}
							spy={true}
							smooth={true}
							offset={-25}>
							<p>Coding Challenges</p>
						</Link>
					</div>
					<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
						<Link
							activeClass="opacity-100 text-minimalist-lime transition duration-150"
							to={"projects"}
							spy={true}
							smooth={true}
							offset={-25}>
							<p>Projekte</p>
						</Link>
					</div>
					<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
						<Link
							activeClass="opacity-100 text-minimalist-lime transition duration-150"
							to={"cv"}
							spy={true}
							smooth={true}
							offset={-25}>
							<p>Lebenslauf</p>
						</Link>
					</div>
					<div className="transition duration-150 rounded-lg cursor-pointer hover:bg-gray-700">
						<Link
							activeClass="opacity-100 text-minimalist-lime transition duration-150"
							to={"contact"}
							spy={true}
							smooth={true}
							offset={-25}>
							<p>Kontakt</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
