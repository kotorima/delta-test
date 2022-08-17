import MainPage from "../pages/main-page";
import Redirect from "./Redirect";

const routes = [
	{
		path: "/",
		id: 0,
		index: true,
		element: <MainPage link='/' title='Delta' />,
	},
	{
		path: "*",
		id: 1,
		element: <Redirect link='/' title='Delta' />,
	},
];

export default routes;
