import axios from 'axios';

export default class BookApi {
	static getAllBooks(cb) {
		axios
			.get('http://localhost:3000/books')
			.then(response => cb(response.data))
			.catch(error => {
				throw error;
			});
	}
}
