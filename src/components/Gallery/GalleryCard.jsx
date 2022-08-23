import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import styles from "./card.scss";

const GalleryCard = ({ id, url, onOpen }) => {
	const { card, image, imageWrapper } = styles;
	return (
		<Button onClick={onOpen} className={card}>
			<div className={imageWrapper}>
				<img src={url} alt={id} className={image} />
			</div>
			<div>id: {id}</div>
		</Button>
	);
};

GalleryCard.propTypes = {
	id: PropTypes.number,
	url: PropTypes.string,
	onOpen: PropTypes.func,
};

export default GalleryCard;
