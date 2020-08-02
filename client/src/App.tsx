import React from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import { Switch, Route } from "react-router-dom";
import BackEnd from "./pages/BackEnd";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className="">
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route exact path="/login">
					<LoginPage />
				</Route>
				<Route exact path="/backend">
					<ToastContainer />
					<BackEnd />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
