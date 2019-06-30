import React, { Component } from 'react';
import BookApi from '../data/BookApi';
import { deleteBook } from '../data/BookApi';
import { Link } from 'react-router-dom';

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

	onDeleteClick = id => {
		deleteBook(id);
		let books = this.state.books.filter(book => {
			return book.id !== id;
		});

		this.setState({
			books: books,
		});
	};

	render() {
		let books = this.state.books ? this.state.books : [];
		console.log(this.props);
		// Entire book list, only render when filter is empty
		// Edit/Update book when title is clicked
		const bookList = books.map(book => {
			console.log(book.id);
			return (
				<tr>
					<td>{book.id}</td>
					<td>
						<Link to={'/edit/' + book.id}>{book.title}</Link>
					</td>
					<td>{book.author}</td>
					<td>{book.isbn}</td>
					<td>{book.publicationDate}</td>
					<td>{book.publisher}</td>
					<td>{book.genre}</td>
					<td>{book.format}</td>
					<td>
						<button
							className="btn btn-primary"
							onClick={e => {
								this.onDeleteClick(book.id);
							}}
						>
							Delete
						</button>
					</td>
				</tr>
			);
		});

		// Only render after user entered filter
		const filteredBooks = books.filter(book => {
			return book.title.includes(this.state.filter);
		});

		const filteredBookList = filteredBooks.map(book => {
			return (
				<tr>
					<td>{book.id}</td>
					<td>
						<Link>{book.title}</Link>
					</td>
					<td>{book.author}</td>
					<td>{book.isbn}</td>
					<td>{book.publicationDate}</td>
					<td>{book.publisher}</td>
					<td>{book.genre}</td>
					<td>{book.format}</td>
					<td className="btn btn-primary">
						<button>Delete</button>
					</td>
				</tr>
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

				<table className="table">
					<thead>
						<tr>
							<th scope="col">Id</th>
							<th scope="col">Title</th>
							<th scope="col">Author</th>
							<th scope="col">ISBN</th>
							<th scope="col">PublishedDate</th>
							<th scope="col">Publisher</th>
							<th scope="col">Price</th>
							<th scope="col">Genre</th>
							<th scope="col">format</th>
						</tr>
					</thead>
					{this.state.filter === '' ? <tbody>{bookList}</tbody> : <tbody>{filteredBookList}</tbody>}
				</table>

				{/* Render everything if filter is empty or render only filter items */}
			</div>
		);
	}
}

export default ViewBook;
