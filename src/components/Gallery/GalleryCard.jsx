import React from "react";
import PropTypes from "prop-types";

const GalleryCard = ({ id, url }) => (
	<div>
		<img src={url} alt={id} />
		<div>id: {id}</div>
	</div>
);

GalleryCard.propTypes = {
	id: PropTypes.number,
	url: PropTypes.string,
};

export default GalleryCard;
