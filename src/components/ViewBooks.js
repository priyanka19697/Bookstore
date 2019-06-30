import React, { Component } from 'react';
import BookApi from '../data/BookApi';

class ViewBook extends Component {
	state = {
		books: [],
		filter: "",
	};

	componentDidMount() {
		BookApi.getAllBooks(data => this.setState({ books: data }));
	}

	onFilterChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	render() {
		let books = this.state.books ? this.state.books : ([]);

		// Entire book list, only render when filter is empty
		const bookList = books.map(book => {
			return <li>{book.title}</li>;
		});

		// Only render after user entered filter
		const filteredBooks = books.filter(book => {
			return book.title.includes(this.state.filter);
		});

		const filteredBookList = filteredBooks.map(book => {
			return <li>{book.title}</li>;
		});

		return (
			<div>
				<form>
					<label>Filter</label>
					<input type="text" id="filter" value={this.state.filter} onChange={this.onFilterChange} />
				</form>

				{/* Render everything if filter is empty or render only filter items */}
				{(this.state.filter === "" ? (<ul>{bookList}</ul>) : (<ul>{filteredBookList}</ul>))}
			</div>
		);
	}
}

export default ViewBook;
