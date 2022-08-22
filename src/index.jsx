import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/generateState";
import reportWebVitals from "./reportWebVitals";
import "./styles/globals.scss";

const root = createRoot(document.getElementById("root"));
const devApiUrl = "https://boiling-refuge-66454.herokuapp.com";
// const prodApiUrl = "";

root.render(
	<Provider store={store}>
		<App apiUrl={devApiUrl} />
	</Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
