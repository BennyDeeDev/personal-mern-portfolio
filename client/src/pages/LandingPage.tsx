import React, { useEffect, useState } from "react";
import Hero from "../sections/Hero";
import NavBar from "../components/NavBar";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Cv from "../sections/Cv";
import Footer from "../sections/Footer";
import BackendService from "../services/BackendService";
import SideBar from "../components/builder/SideBar";

export default function LandingPage() {
	/* 	const [state, setState] = useState({
		AboutMe: [],
	});

	useEffect(() => {
		BackendService.fetchUserData().then(({ data }) => setState(data));
	}, []); */
	return (
		<div>
			{/* <NavBar /> */}
			<div className="md:ml-48">
				<SideBar />

				<Hero />

				<div className="bg-gray-100">
					<div className="mx-auto max-w-screen-xl px-4 py-8">
						<AboutMe /* data={state.strengths} */ />
					</div>
				</div>
				<div className="bg-white">
					<div className="mx-auto max-w-screen-xl px-4 py-8">
						{/* <Skills /> */}
						<Cv />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
