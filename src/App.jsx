import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Layout from "./routing/Layout";
import Navigation from "./routing/Navigation";
import { addApi } from "./store/slices/apiUrl";
import "./App.scss";
import "./styles/globals.scss";

const App = ({ apiUrl }) => {
	const dispatch = useDispatch();
	dispatch(addApi(apiUrl));

	return (
		<BrowserRouter>
			<div className='page'>
				<div className='wrapper'>
					<Layout>
						<Navigation />
					</Layout>
				</div>
			</div>
		</BrowserRouter>
	);
};

App.propTypes = {
	apiUrl: PropTypes.string,
};

export default App;
