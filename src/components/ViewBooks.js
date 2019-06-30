import React, { Component } from 'react';
import BookApi from '../data/BookApi';

class ViewBook extends Component {
	state = {
		books: [],
		filter: '',
	};

	componentDidMount() {
		BookApi.getAllBooks(data => this.setState({ books: data }));
	}

	onFilterChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.id]: e.target.value,
		});

		console.log(this.props);
	};

	// addBook = book => {
	// 	book.id = Math.random();
	// 	let books = [...this.state.books, book];
	// 	this.setState({
	// 		books: books,
	// 	});
	// };

	render() {
		let books = this.state.books ? this.state.books : [];

		// Entire book list, only render when filter is empty
		const bookList = books.map(book => {
			return (
				<div>
					<li>{book.title}</li>
					<button>Delete</button>
				</div>
			);
		});

		// Only render after user entered filter
		const filteredBooks = books.filter(book => {
			return book.title.includes(this.state.filter);
		});

		const filteredBookList = filteredBooks.map(book => {
			return (
				<div>
					<li>{book.title}</li>
					<button>Delete</button>
				</div>
			);
		});

		return (
			<div className="container">
				<form className="form-group">
					<label>
						<h2>Filter</h2>
					</label>
					<input
						type="text"
						className="form-control"
						id="filter"
						value={this.state.filter}
						onChange={this.onFilterChange}
					/>
				</form>
				{/* Render everything if filter is empty or render only filter items */}
				{this.state.filter === '' ? <ul>{bookList}</ul> : <ul>{filteredBookList}</ul>}
			</div>
		);
	}
}

export default ViewBook;
