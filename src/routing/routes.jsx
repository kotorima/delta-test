import MainPage from "../pages/main";
import Redirect from "./Redirect";

const routes = [
	{
		path: "/",
		id: 0,
		element: <MainPage link='/' title='Main Page' />,
	},
	{
		path: "*",
		id: 1,
		element: <Redirect link='/' title='Main Page' />,
	},
];

export default routes;
