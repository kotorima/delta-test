import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const CommentsBlock = ({ comments, imageId }) => {
	return (
		<div>
			<TextField multiline rows={4} placeholder='Comments' variant='standard' />
		</div>
	);
};

CommentsBlock.propTypes = {
	comments: PropTypes.array,
	imageId: PropTypes.number,
};

export default CommentsBlock;
