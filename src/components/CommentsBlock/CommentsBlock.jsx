import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button } from "@mui/material";
import fetchRequest from "../../helpers/fetchRequest";

const CommentsBlock = ({ comments, postId, link, prompt }) => {
	const [error, setError] = useState(false);
	const [notice, setNotice] = useState("");
	const [message, setMessage] = useState("");
	const date = new Date().toISOString();
	console.log(date);

	const sendComment = (event) => {
		const params = { text: message, id: postId, date: date };

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
					helperText={error ? notice : prompt}
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

CommentsBlock.defaultProps = {
	comments: [],
	link: "",
	prompt: "",
};

CommentsBlock.propTypes = {
	comments: PropTypes.array,
	postId: PropTypes.number,
	link: PropTypes.string,
	prompt: PropTypes.string,
};

export default CommentsBlock;
