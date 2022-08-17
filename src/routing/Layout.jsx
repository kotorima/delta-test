import React from "react";
import PropTypes from "prop-types";

function Layout({ children }) {
	return <div>{children}</div>;
}

Layout.defaultProps = {
	children: [],
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
