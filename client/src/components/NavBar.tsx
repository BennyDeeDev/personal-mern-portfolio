import React, { useState } from "react";
import navbarMock from "../mocks/navbarMock";

import { Link } from "react-scroll";
import Hamburger from "hamburger-react";

import { isMobile } from "react-device-detect";

export default function NavBar() {
	const [isOpen, setOpen] = useState(false);

	const navBarItems = () => {
		return navbarMock.map((nav, index) => (
			<div key={index} className="py-2 mx-8">
				<div className="text-center">
					<Link
						activeClass="opacity-100 text-minimalist-lime transition duration-300"
						to={nav.id}
						spy={true}
						smooth={true}
						offset={-100}
					>
						{nav.text}
					</Link>
				</div>
			</div>
		));
	};

	/* import Reveal from "react-reveal/Reveal";
	TODO: animate open and close ? https://www.npmjs.com/package/react-responsive !load svgs with navbar !mobile höhrere offset vom smooth scrolling */

	const navHamburger = () => {
		return (
			<React.Fragment>
				<div className="self-end">
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>

				<div className="">{isOpen ? navBarItems() : null}</div>
			</React.Fragment>
		);
	};

	return (
		<div className="w-full bg-gray-700 sticky top-0 z-50 flex flex-col justify-around items-center text-white border-b-4 border-minimalist-lime md:flex-row">
			{!isMobile ? navBarItems() : navHamburger()}
		</div>
	);
}
