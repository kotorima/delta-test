import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Layout from "./Layout";

const Redirect = ({ link }) => (
	<Layout>
		<Navigate replace to={link} />
	</Layout>
);

Redirect.defaultProps = {
	link: "",
};

Redirect.propTypes = {
	link: PropTypes.string,
};

export default Redirect;
