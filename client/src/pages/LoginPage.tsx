import React from "react";

export default function LoginPage() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-gray-300 rounded-lg max-w-lg p-12 w-full shadow-md">
				<h1>Backend Login</h1>
				<form action="#">
					<div className="mt-4">
						<span>Email adress</span>
						<input
							className="w-full bg-white rounded-full"
							name="email"
							type="email"
							required
						/>
					</div>
					<div className="mt-2">
						<span>Password</span>
						<input
							className="w-full bg-white rounded-full "
							name="password"
							type="password"
							required
						/>
					</div>
				</form>
				<button
					type="submit"
					className="w-full rounded-lg bg-minimalist-gray mt-6 p-2 text-white opacity-75 hover:opacity-100"
				>
					Sign in
				</button>
			</div>
		</div>
	);
}
