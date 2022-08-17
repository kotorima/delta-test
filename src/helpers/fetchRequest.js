const fetchRequest = (
	url,
	method = "GET",
	format = "application/json",
	data = null,
) => {
	const params = {
		method: method,
		headers: {
			"Content-Type": format,
		},
	};

	if (data) params.body = data;

	return fetch(url, params).then((resp) => resp.json());
};

export default fetchRequest;
