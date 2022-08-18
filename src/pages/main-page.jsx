import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Gallery from "../components/Gallery/Gallery";
import fetchRequest from "../helpers/fetchRequest";
import addTitlePage from "../helpers/addTitlePage";
import { imagesUrl } from "../helpers/apiUrlList";

const MainPage = ({ title }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		addTitlePage(title);
		fetchRequest(imagesUrl)
			.then((data) => setImages(data))
			.catch((error) => console.log("Something went wrong", error));
	}, []);

	return (
		<div>
			{images.length > 0 ? (
				<Gallery images={images} link={imagesUrl} />
			) : (
				<div>Image list is empty</div>
			)}
		</div>
	);
};

MainPage.defaultProps = {
	title: "Delta",
};

MainPage.propTypes = {
	title: PropTypes.string,
};

export default MainPage;
