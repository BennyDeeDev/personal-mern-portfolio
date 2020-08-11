import React from "react";
import HeadTitle from "../components/HeadTitle";
import contact from "../images/contact.svg";
import BackendService from "../services/BackendService";

export default function Contact() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.target);

		/* 	fetch("/api/contact", {
			method: "POST",
			body: data,
		}); */

		BackendService.postContact(data).then((Response) => console.log(Response));
	};

	return (
		<div>
			<HeadTitle svg={contact} title="Kontakt">
				<p>Noch Fragen? Hier können Sie mich kontaktieren</p>
			</HeadTitle>

			<div className="mx-auto bg-white rounded-lg border border-minimalist-gray max-w-lg px-6 py-12 md:p-12 w-full ">
				<form
					onSubmit={handleSubmit}
					enctype="multipart/form-data"
					id="contact-form"
					method="post"
					role="form"
					className="space-y-4">
					<div className="flex ">
						<input
							className="rounded-full w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
              focus:border-minimalist-teal sm:text-sm sm:leading-5"
							name="email"
							type="email"
							id="email"
							placeholder="Email"
							required
						/>
						<input
							className="ml-8 rounded-full w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
			  focus:border-minimalist-teal sm:text-sm sm:leading-5"
							id="name"
							name="name"
							type="text"
							placeholder="Name"
						/>
					</div>
					<input
						className="rounded-full w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
              focus:border-minimalist-teal sm:text-sm sm:leading-5"
						name="subject"
						id="subject"
						type="text"
						placeholder="Betreff"
					/>
					<textarea
						className="rounded-lg w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
              focus:border-minimalist-teal sm:text-sm sm:leading-5"
						placeholder="Nachricht"
						name="message"
						id="message"
					/>
					<button className="w-full rounded-lg bg-minimalist-gray mt-6 p-2 text-white opacity-75 hover:opacity-100">
						Senden
					</button>
				</form>
			</div>
		</div>
	);
}
