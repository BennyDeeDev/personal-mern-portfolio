import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
			<ToastContainer />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
