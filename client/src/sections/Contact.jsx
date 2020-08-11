import React, { useState } from "react";
import HeadTitle from "../components/HeadTitle";
import contact from "../images/contact.svg";
import BackendService from "../services/BackendService";
import { useForm } from "react-hook-form";

export default function Contact() {
	const { register, errors, setError, handleSubmit } = useForm();
	const [success, setSuccess] = useState("");

	const onSubmit = (data) => {
		BackendService.postContact(data)
			.then(({ data }) => setSuccess("Email ist unterwegs"))
			.catch(() =>
				setError("formError", {
					type: "manual",
					message: "Es ist was schiefgelaufen, bitte versuchen Sie es später noch einmal",
				})
			);
	};

	return (
		<div>
			<HeadTitle svg={contact} title="Kontakt">
				<p>Noch Fragen? Hier können Sie mich kontaktieren</p>
			</HeadTitle>

			<div className="mx-auto bg-white rounded-lg border border-minimalist-gray max-w-lg px-6 py-12 md:p-12 w-full ">
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div className="flex ">
						<input
							className="rounded-full w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
              focus:border-minimalist-teal sm:text-sm sm:leading-5"
							name="email"
							type="email"
							id="email"
							placeholder="Email"
							ref={register({ required: true })}
						/>

						<input
							className="ml-8 rounded-full w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
			  focus:border-minimalist-teal sm:text-sm sm:leading-5"
							id="name"
							name="name"
							type="text"
							placeholder="Name"
							ref={register()}
						/>
					</div>
					<div
						className={`bg-red-400 rounded-sm border border-red-600 mt-1 px-1 text-white ${
							!errors.email ? "hidden" : ""
						}`}>
						{errors.email && "Bitte geben Sie ihre Email an"}
					</div>
					<input
						className="rounded-full w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
              focus:border-minimalist-teal sm:text-sm sm:leading-5"
						name="subject"
						id="subject"
						type="text"
						placeholder="Betreff"
						ref={register()}
					/>
					<textarea
						className="rounded-lg w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
              focus:border-minimalist-teal sm:text-sm sm:leading-5"
						placeholder="Nachricht"
						name="message"
						id="message"
						ref={register({ required: true })}
					/>
					<div
						className={`bg-red-400 rounded-sm border border-red-600 mt-1 px-1 text-white ${
							!errors.message ? "hidden" : ""
						}`}>
						{errors.message && "Bitte geben Sie eine Nachricht an"}
					</div>
					<button className="w-full rounded-lg bg-minimalist-gray mt-6 p-2 text-white opacity-75 hover:opacity-100">
						Senden
					</button>
					{success ? (
						<div className=" bg-green-500 rounded-sm border border-green-600 mt-1 px-1 text-white">
							{success}
						</div>
					) : null}
					<div
						className={`bg-red-500 rounded-sm border border-red-600 mt-1 px-1 text-white ${
							!errors.formError ? "hidden" : ""
						}`}>
						{errors.formError && "Bitte geben Sie ihre Email an"}
					</div>
				</form>
			</div>
		</div>
	);
}
