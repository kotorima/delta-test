import React from "react";
import PropTypes from "prop-types";
import { Modal } from "@mui/material";

const Popup = ({ open, onClose, children }) => {
	return (
		<div>
			<Modal open={open} onClose={onClose}>
				{children}
			</Modal>
		</div>
	);
};

Popup.propTypes = {
	onClose: PropTypes.func,
	open: PropTypes.bool,
	children: PropTypes.node,
};

export default Popup;
