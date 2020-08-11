import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BackendService from "../services/BackendService";
import { Redirect } from "react-router-dom";
import AuthToken from "../services/AuthToken";

export default function LoginPage() {
	const { register, errors, handleSubmit } = useForm();
	const [loginError, setLoginError] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const onSubmit = (credentials) => {
		setLoginError("");
		BackendService.login(credentials)
			.then(({ data }) => {
				setLoggedIn(true);

				AuthToken.setAuthToken(data);
			})
			.catch((Error) => setLoginError(Error.response.data));
	};

	return (
		<div className="h-screen md:min-h-screen px-4 py-8 flex items-center justify-center">
			<div className="bg-gray-300 rounded-lg max-w-lg px-6 py-12 md:p-12 w-full shadow-md">
				<h1>Backend Login</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mt-4">
						<span>Email adress</span>
						<input
							className="rounded-full w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
              focus:border-minimalist-teal sm:text-sm sm:leading-5"
							name="email"
							type="email"
							ref={register({ required: true })}
						/>
						<div
							className={`bg-red-400 rounded-sm border border-red-600 mt-1 px-1 text-white ${
								!errors.email ? "hidden" : ""
							}`}>
							{errors.email && "Email is required"}
						</div>
					</div>
					<div className="mt-2">
						<span>Password</span>
						<input
							className="rounded-full w-full px-3 py-2 border border-gray-300 text-gray-900  focus:outline-none 
              focus:border-minimalist-teal sm:text-sm sm:leading-5"
							name="password"
							type="password"
							ref={register({ required: true })}
						/>
						<div
							className={`bg-red-400 rounded-sm border border-red-600 mt-1 px-1 text-white ${
								!errors.password ? "hidden" : ""
							}`}>
							{errors.password && "Password is required"}
						</div>
					</div>
					<button
						type="submit"
						className="w-full rounded-lg bg-minimalist-gray mt-6 p-2 text-white opacity-75 hover:opacity-100">
						Sign in
					</button>
					{loginError ? (
						<div className="bg-red-400 rounded-lg mt-2 px-2 text-white border border-red-700">
							{loginError}
						</div>
					) : null}
				</form>
				{loggedIn ? <Redirect to="/backend" /> : null}
			</div>
		</div>
	);
}
