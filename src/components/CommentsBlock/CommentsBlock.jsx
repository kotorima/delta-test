import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";
import fetchRequest from "../../helpers/fetchRequest";

const CommentsBlock = ({ comments, postId, link }) => {
	const [error, setError] = useState("");

	const sendComment = () => {
		fetchRequest(`${link}/${postId}/comments`, "POST")
			.then(({ errors, ...data }) => {
				if (errors) setError(errors.comment);
				return data;
			})
			.catch((error) => console.log(error));
	};
	return (
		<div>
			<TextField
				multiline
				rows={4}
				helperText={
					error.length ? error : "Write a few sentences about the photo."
				}
				placeholder='Comment'
				variant='standard'
				required
				error={error.length}
			/>
			<Button onClick={sendComment} variant='contained'>
				Save
			</Button>
		</div>
	);
};

CommentsBlock.propTypes = {
	comments: PropTypes.array,
	postId: PropTypes.number,
	link: PropTypes.string,
};

export default CommentsBlock;
