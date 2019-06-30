import React, { Component } from 'react';
import BookApi from '../data/BookApi';

class ViewBooks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
		};
	}

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
		let books = this.props.books;
		const bookList = books.map(book => {
			return <li>{book.title}</li>;
		});
		const filteredBooks = books.filter(book => {
			return book.title.includes(this.state.filter);
		});

		const filteredBookList = filteredBooks.map(book => {
			return <li>{book.title}</li>;
		});
		console.log(filteredBookList);

		return (
			<div>
				<form>
					<label>Filter</label>
					<input type="text" id="filter" value={this.state.filter} onChange={this.onFilterChange} />
				</form>
				<ul>{bookList}</ul>
				<ul>{filteredBookList}</ul>
			</div>
		);
	}
}

export default ViewBooks;
