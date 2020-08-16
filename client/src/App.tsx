import React from "react";
import LandingPage from "./pages/LandingPage";
import "./styles/App.css";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
	return (
		<div className="">
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>

				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
