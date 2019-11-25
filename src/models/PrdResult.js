import axios from 'axios';
let serverUrl = 'http://127.0.0.1:3000/api/prd';
let items = [];

export default {
	list(query) {
		console.log(axios.get(serverUrl))
		return axios.get(serverUrl);
	},
	remove(id) {
		return new Promise((resolve, reject) => {
			items = items.filter(item => item.id != id);
			resolve(items);
		});
	}
}
