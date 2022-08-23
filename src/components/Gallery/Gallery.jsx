import React, { useState } from "react";
import PropTypes from "prop-types";
import Popup from "../Popup";
import CommentsBlock from "../CommentsBlock/CommentsBlock";
import fetchRequest from "../../helpers/fetchRequest";
import GalleryCard from "./GalleryCard";
import styles from "./styles.module.scss";

const Gallery = ({ images, link }) => {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState(<></>);
	const { gallery } = styles;
	const prompt = "Write a few sentences about the photo.";

	const handleOpen = (id) => {
		const url = `${link}/${id}`;

		return fetchRequest(url)
			.then((data) => {
				renderPopupContent(data, url);
				return setOpen(true);
			})
			.catch((error) => console.log(error));
	};

	const handleClose = () => setOpen(false);

	const renderPopupContent = ({ url: urlImage, id, comments }, url) => {
		const element = (
			<>
				<img src={urlImage} alt={id} />
				<CommentsBlock
					comments={comments}
					postId={id}
					link={url}
					prompt={prompt}
				/>
			</>
		);
		return setContent(element);
	};

	return (
		<div className={gallery}>
			{images.map(({ id, url }) => (
				<GalleryCard key={id} id={id} url={url} onOpen={() => handleOpen(id)} />
			))}
			<Popup open={open} onClose={handleClose}>
				{content}
			</Popup>
		</div>
	);
};

Gallery.defaultProps = {
	images: [],
	link: "",
};

Gallery.propTypes = {
	images: PropTypes.array,
	link: PropTypes.string,
};

export default Gallery;
