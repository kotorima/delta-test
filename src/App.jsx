import React from "react";
import Layout from "./routing/Layout";
import Navigation from "./routing/Navigation";
import "./App.css";

const App = () => (
	<div className='App'>
		<Layout>
			<Navigation />
		</Layout>
	</div>
);

export default App;
