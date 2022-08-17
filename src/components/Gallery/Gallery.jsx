import React, { useState } from "react";
import PropTypes from "prop-types";
import Popup from "../Popup";
import CommentsBlock from "../CommentsBlock/CommentsBlock";
import fetchRequest from "../../helpers/fetchRequest";
import GalleryCard from "./GalleryCard";

const Gallery = ({ images, url }) => {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({});
	const handleOpen = (id) => {
		fetchRequest(`${url}/${id}`)
			.then((res) => {
				setOpen(true);
				return setData(res);
			})
			.catch((error) => console.log(error));
	};
	const handleClose = () => setOpen(false);

	return (
		<div>
			{images.map(({ id, url }) => (
				<GalleryCard
					key={id}
					id={id}
					url={url}
					onClick={() => handleOpen(id)}
				/>
			))}
			{data && data !== {} ? (
				() => {
					const { url, id, comments } = data;
					return (
						<Popup open={open} onClose={handleClose}>
							<img src={url} alt={id} />
							<CommentsBlock comments={comments} imageId={id} />
						</Popup>
					);
				}
			) : (
				<div>Something went wrong</div>
			)}
		</div>
	);
};

Gallery.defaultProps = {
	images: [],
	url: "",
};

Gallery.propTypes = {
	images: PropTypes.array,
	url: PropTypes.string,
};

export default Gallery;
