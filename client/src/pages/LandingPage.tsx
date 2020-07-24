import React from "react";
import Hero from "../sections/Hero";
import NavBar from "../components/NavBar";
import Strengths from "../sections/Strengths";
import Skills from "../sections/Skills";
import Cv from "../sections/Cv";
import Footer from "../sections/Footer";

export default function LandingPage() {
	return (
		<div>
			<Hero />
			<NavBar />
			<div className="mx-auto max-w-screen-xl px-4 py-8">
				<Strengths />
				<Skills />
				<Cv />
			</div>

			<Footer />
		</div>
	);
}
