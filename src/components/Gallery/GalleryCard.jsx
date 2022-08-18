import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const GalleryCard = ({ id, url, onOpen }) => (
	<Button onClick={onOpen}>
		<div>
			<img src={url} alt={id} />
		</div>
		<div>id: {id}</div>
	</Button>
);

GalleryCard.propTypes = {
	id: PropTypes.number,
	url: PropTypes.string,
	onOpen: PropTypes.func,
};

export default GalleryCard;
