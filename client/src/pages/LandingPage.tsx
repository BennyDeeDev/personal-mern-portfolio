import React from "react";
import Hero from "../sections/Home";

import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Cv from "../sections/Cv";
import Footer from "../sections/Footer";

import NavBar from "../components/NavBar";
import Projects from "../sections/Projects";
import Udemy from "../sections/Udemy";
import CodingChallenges from "../sections/CodingChallenges";
import Contact from "../sections/Contact";

import { api } from "../services/BackendService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LandingPage() {
	api.interceptors.response.use(
		(res) => res,
		(err) => {
			toast.error("Beim laden der Daten ist etwas schiefgelaufen, bitte kommen Sie später wieder", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});

			return Promise.reject(err);
		}
	);

	return (
		<div className="">
			<div className="lg:ml-48">
				<NavBar />

				<Hero />

				<div className="bg-gray-100">
					<div className="container centered-container">
						<AboutMe />
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
