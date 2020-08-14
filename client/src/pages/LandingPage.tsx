import React, { useEffect, useState } from "react";
import Hero from "../sections/Home";
import NavBar from "../components/NavBar";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Cv from "../sections/Cv";
import Footer from "../sections/Footer";
import BackendService from "../services/BackendService";
import SideBar from "../components/SideBar";
import Projects from "../sections/Projects";
import Udemy from "../sections/Udemy";
import CodingChallenges from "../sections/CodingChallenges";
import Contact from "../sections/Contact";

export default function LandingPage() {
	/* 	const [state, setState] = useState({
		AboutMe: [],
	});

	useEffect(() => {
		BackendService.fetchUserData().then(({ data }) => setState(data));
	}, []); */
	return (
		<div className="">
			{/* <NavBar /> */}
			<div className="lg:ml-48">
				<SideBar />

				<Hero />

				<div className="bg-gray-100">
					<div className="container centered-container">
						<AboutMe /* data={state.strengths} */ />
					</div>
				</div>
				<div className="bg-white">
					<div className="container centered-container">
						<Skills />
					</div>
				</div>

				<div className="bg-gray-100">
					<div className="container centered-container">
						<Udemy />
					</div>
				</div>

				<div className="bg-white">
					<div className="container centered-container">
						<CodingChallenges />
					</div>
				</div>

				<div className="bg-gray-100">
					<div className="container centered-container">
						<Projects />
					</div>
				</div>

				<div className="bg-white">
					<div className="container centered-container">
						<Cv />
					</div>
				</div>

				<div id="contact">
					<div className="bg-gray-100">
						<div className="container centered-container">
							<Contact />
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</div>
	);
}
