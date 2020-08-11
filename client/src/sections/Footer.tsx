import React from "react";
import mail from "../images/mail.svg";
import TextWithSvg from "../components/TextWithSvg";

export default function Footer() {
	return (
		<div className="relative w-full h-36 bg-gray-700 text-white">
			<div className="flex p-8 justify-between">
				<div className="flex flex-col items-center justify-center w-48 space-y-2">
					<h2>Email</h2>
					<img className="w-12" src={mail} alt="" />
					{/* <TextWithSvg Tag="h2" styleSvg="w-12" styleDiv="flex flex-col py-1" title={"Email"} svg={mail} /> */}
					<div className="text-center">
						<a href="mailto:b.derksen@mail.de">b.derksen@mail.de</a>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 right-0 p-4 m-4">
				<small className="">&copy; Copyright 2020, Benjamin Derksen</small> <br />
				<small>
					Icons made by Eucalyp <br />
					from www.flaticon.com
				</small>
			</div>
		</div>
	);
}
