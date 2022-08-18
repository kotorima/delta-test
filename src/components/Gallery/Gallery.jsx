import React, { useState } from "react";
import PropTypes from "prop-types";
import Popup from "../Popup";
import CommentsBlock from "../CommentsBlock/CommentsBlock";
import fetchRequest from "../../helpers/fetchRequest";
import GalleryCard from "./GalleryCard";

const Gallery = ({ images, link }) => {
	const [open, setOpen] = useState(false);
	const [content, setContent] = useState(<></>);

	const handleOpen = (id) =>
		fetchRequest(`${link}/${id}`)
			.then((data) => {
				renderPopupContent(data);
				return setOpen(true);
			})
			.catch((error) => console.log(error));

	const handleClose = () => setOpen(false);

	const renderPopupContent = ({ url, id, comments }) => {
		const element = (
			<>
				<img src={url} alt={id} />
				<CommentsBlock comments={comments} postId={id} link={link} />
			</>
		);
		return setContent(element);
	};

	return (
		<div>
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
