import React from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import { Switch, Route } from "react-router-dom";

//TODO: after production build link b-derksen to benjaminderksen
function App() {
	return (
		<div className="">
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>
				<Route exact path="/backend">
					<LoginPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
