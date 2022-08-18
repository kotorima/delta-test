import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

const Navigation = () => (
	<Routes>
		{routes.map(({ id, path, element, index }) => (
			<Route key={id} path={path} element={element} index={index} />
		))}
	</Routes>
);

export default Navigation;
