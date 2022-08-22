import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const apiUrlSlice = createSlice({
	name: "apiUrl",
	initialState: initialState.apiUrl,

	reducers: {
		addApi: (state, action) => {
			const apiUrl = action.payload;
			state = apiUrl;

			return state;
		},
	},
});

export const { addApi } = apiUrlSlice.actions;

export const getApiUrl = (state) => state.apiUrl;

export default apiUrlSlice.reducer;
