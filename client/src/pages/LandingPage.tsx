import React, { useEffect, useState } from "react";
import Hero from "../sections/Hero";
import NavBar from "../components/NavBar";
import Strengths from "../sections/Strengths";
import Skills from "../sections/Skills";
import Cv from "../sections/Cv";
import Footer from "../sections/Footer";
import BackendService from "../services/BackendService";

export default function LandingPage() {
	const [state, setState] = useState({
		strengths: [],
	});

	useEffect(() => {
		BackendService.fetchUserData().then(({ data }) => setState(data));
	}, []);
	return (
		<div>
			<Hero />
			<NavBar />
			<div className="mx-auto max-w-screen-xl px-4 py-8">
				<Strengths data={state.strengths} />
				<Skills />
				<Cv />
			</div>

			<Footer />
		</div>
	);
}
