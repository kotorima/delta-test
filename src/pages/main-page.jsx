import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Gallery from "../components/Gallery/Gallery";
import fetchRequest from "../helpers/fetchRequest";
import addTitlePage from "../helpers/addTitlePage";
import { getApiUrl } from "../store/slices/apiUrl";

const MainPage = ({ title }) => {
	const [images, setImages] = useState([]);
	const url = `${useSelector(getApiUrl)}/images`;

	useEffect(() => {
		addTitlePage(title);
		fetchRequest(url)
			.then((data) => setImages(data))
			.catch((error) => console.log("Something went wrong", error));
	}, []);

	return (
		<div>
			{images.length > 0 ? (
				<Gallery images={images} link={url} />
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
