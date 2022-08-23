import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import Gallery from "../components/Gallery/Gallery";
import fetchRequest from "../helpers/fetchRequest";
import addTitlePage from "../helpers/addTitlePage";
import { getApiUrl } from "../store/slices/apiUrl";
import styles from "../styles/pages/main.module.scss";

const MainPage = ({ title }) => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);
	const { main } = styles;
	const url = `${useSelector(getApiUrl)}/images`;

	useEffect(() => {
		addTitlePage(title);
		fetchRequest(url)
			.then((data) => {
				setLoading(false);
				return setImages(data);
			})
			.catch((error) => console.log("Something went wrong", error));
	}, []);

	return (
		<div className={main}>
			{loading && <CircularProgress />}
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
