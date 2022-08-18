const fetchRequest = (
	url,
	method = "GET",
	data = null,
	format = "application/json",
) => {
	const params = {
		method: method,
		headers: {
			"Content-Type": format,
		},
	};

	if (data) params.body = data;
	console.log(params, data);

	return fetch(url, params).then((resp) => resp.json());
};

export default fetchRequest;
