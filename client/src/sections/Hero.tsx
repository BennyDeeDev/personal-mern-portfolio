import React from "react";
//@ts-ignore
import Typewriter from "typewriter-effect";

export default function Hero() {
	return (
		<div className="flex bg-black h-screen text-white text-xl md:text-3xl">
			<div className="flex justify-center items-center flex-grow ">
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
			</div>
		</div>
	);
}
