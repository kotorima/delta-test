import React from "react";
import PropTypes from "prop-types";
import { Modal, Fade, Backdrop, Box } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
};

const Popup = ({ open, onClose, children }) => {
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<Box sx={style}>{children}</Box>
				</Fade>
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
