import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";
import fetchRequest from "../../helpers/fetchRequest";

const CommentsBlock = ({ comments, postId, link }) => {
	const [error, setError] = useState(false);
	const [notice, setNotice] = useState("");
	const [message, setMessage] = useState("");

	const sendComment = (event) => {
		const params = { comment: message };

		fetchRequest(`${link}/${postId}/comments`, "POST", JSON.stringify(params))
			.then(({ errors, ...data }) => {
				if (errors) {
					setError(true);
					setNotice(errors);
					console.log(errors);
				}
				return data;
			})
			.catch((error) => console.log(error));

		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={sendComment}>
				<TextField
					multiline
					rows={4}
					helperText={error ? notice : "Write a few sentences about the photo."}
					placeholder='Comment'
					variant='standard'
					required
					error={error}
					value={message}
					onInput={(e) => setMessage(e.target.value)}
				/>
				<Button type='submit' variant='contained'>
					Save
				</Button>
			</form>
		</div>
	);
};

CommentsBlock.propTypes = {
	comments: PropTypes.array,
	postId: PropTypes.number,
	link: PropTypes.string,
};

export default CommentsBlock;
