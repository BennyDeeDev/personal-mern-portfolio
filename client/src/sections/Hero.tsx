import React from "react";
//@ts-ignore
import Typewriter from "typewriter-effect";
import next from "../images/next.svg";

import Fade from "react-reveal/Fade";

export default function Hero() {
	return (
		<div className="flex bg-black h-screen text-white text-xl md:text-3xl">
			<div className="flex flex-col justify-center items-center flex-grow ">
				<div className="relative md:w-1/2">
					<span className="text-terminal-green font-ubuntu">user@benjaminderksen.de</span>
					<span className="">
						:<span className="text-blue-500">~</span>$
					</span>
					<div className="inline ml-1 lg:absolute">
						<Typewriter
							options={{
								cursor: "_",
							}}
							onInit={(typewriter) => {
								typewriter
									.pauseFor(1000)
									.typeString("./node sr")
									.pauseFor(10)
									.deleteChars(2)
									.typeString("server.js")
									.start();
							}}
						/>
					</div>
					<div className="absolute">
						<Typewriter
							options={{ cursor: "" }}
							onInit={(typewriter) => {
								typewriter.pauseFor(4000).pasteString("Server listening on Port 3000...").start();
							}}
						/>
						<Typewriter
							options={{ cursor: "" }}
							onInit={(typewriter) => {
								typewriter.pauseFor(4500).pasteString("Connected to MongoDB...").start();
							}}
						/>
						<div className="text-green-500">
							<Typewriter
								options={{ cursor: "" }}
								onInit={(typewriter) => {
									typewriter.pauseFor(5000).pasteString("System ready").start();
								}}
							/>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center " style={{ marginTop: "6.2rem" }}>
					<Fade delay={5500}>
						<button className="border border-terminal-green px-8 rounded-lg">
							<Fade delay={5700}>
								<img
									className="w-8 transform transition duration-300 ease-in-out rotate-90"
									src={next}
									alt=""
								/>
							</Fade>
						</button>
					</Fade>
				</div>
			</div>
		</div>
	);
}
