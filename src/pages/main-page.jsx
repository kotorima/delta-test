import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import Gallery from "../components/Gallery/Gallery";
import fetchRequest from "../helpers/fetchRequest";

const MainPage = () => {
	const [images, setImages] = useState([]);
	const link = "https://boiling-refuge-66454.herokuapp.com/images";

	useEffect(() => {
		fetchRequest(link)
			.then((data) => setImages(data))
			.catch((error) => console.log("Something went wrong", error));
	}, []);

	return (
		<div>
			{images.length > 0 ? (
				<Gallery images={images} url={link} />
			) : (
				<div>Image list is empty</div>
			)}
		</div>
	);
};

export default MainPage;
