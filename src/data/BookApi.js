import axios from 'axios';

import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://localhost:3000/books';

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

export function saveBook(book) {
	return fetch(baseUrl + (book.id || ''), {
		method: book.id ? 'PUT' : 'POST', // POST for create, PUT to update when id already exists.
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(book),
	})
		.then(handleResponse)
		.catch(handleError);
}

export function deleteBook(bookId) {
	return fetch(baseUrl + bookId, { method: 'DELETE' })
		.then(handleResponse)
		.catch(handleError);
}
