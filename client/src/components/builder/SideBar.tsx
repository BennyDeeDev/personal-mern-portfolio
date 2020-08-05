import React from "react";
import profilepicture from "../../images/profilepicture.jpg";

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
					<p>Über mich</p>
					<p>Meine Fähigkeiten</p>
					<p>Meine Projekte</p>
					<p>Mein Lebenslauf</p>
					<p>Kontakt</p>
				</div>
			</div>
		</div>
	);
}
