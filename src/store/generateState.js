import { configureStore } from "@reduxjs/toolkit";
import apiUrlReducer from "./slices/apiUrl";

const store = configureStore({
	reducer: {
		apiUrl: apiUrlReducer,
	},
});

export default store;
