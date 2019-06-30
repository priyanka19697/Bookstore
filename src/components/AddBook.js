import React, { Component } from 'react';
import { saveBook, getBook } from '../data/BookApi';

class AddBook extends Component {
	state = {
		title: ' ',
		author: ' ',
		isbn: ' ',
		publicationDate: ' ',
		publisher: ' ',
		price: ' ',
		genre: ' ',
		format: ' ',
	};

	checkExistence = () => {
		if (this.props.match.params.bookId) {
			console.log('FOUND BOOKID');
			// now get the book from server
			// bad way to make network call for 1 book but works
			getBook(this.props.match.params.bookId).then(book => {
				this.setState({
					title: book.title,
					author: book.author,
					isbn: book.isbn,
					publicationDate: book.publicationDate,
					publisher: book.publisher,
					price: book.price,
					genre: book.genre,
					format: book.format,
					id: book.id, // setting id is important
				});
			});
		} else {
			console.log('NO BOOKID FOUND'); // so render empty form
		}
	};

	componentDidMount() {
		this.checkExistence();
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		saveBook(this.state); //adding to state
		this.props.history.push('/');
		window.location.reload(true);
	};

	render() {
		console.log(this.props);
		console.log('STATE', this.state);
		return (
			<div className="container">
				<div className="form-group">
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="title">
							<h4>Title</h4>
						</label>
						<input
							type="text"
							value={this.state.title}
							className="form-control"
							id="title"
							onChange={this.handleChange}
						/>
						<label htmlFor="author">
							<h4>Author</h4>
						</label>
						<input
							type="text"
							value={this.state.author}
							id="author"
							className="form-control"
							onChange={this.handleChange}
						/>
						<label htmlFor="isbn">
							<h4>ISBN</h4>
						</label>
						<input
							type="text"
							value={this.state.isbn}
							id="isbn"
							className="form-control"
							onChange={this.handleChange}
						/>
						<label htmlFor="publicationDate" className="">
							<h4>PublicationDate</h4>
						</label>
						<input
							type="text"
							value={this.state.publicationDate}
							id="publicationDate"
							className="form-control"
							onChange={this.handleChange}
						/>
						<label htmlFor="publisher" className="">
							<h4>Publisher</h4>
						</label>
						<input
							type="text"
							value={this.state.publisher}
							id="publisher"
							className="form-control"
							onChange={this.handleChange}
						/>
						<label htmlFor="price" className="">
							<h4>Price</h4>
						</label>
						<input
							type="text"
							id="price"
							value={this.state.price}
							className="form-control"
							onChange={this.handleChange}
						/>
						<label htmlFor="genre" className="">
							<h4>Genre</h4>
						</label>
						<input
							type="text"
							id="genre"
							value={this.state.genre}
							className="form-control"
							onChange={this.handleChange}
						/>
						<label htmlFor="format" className="">
							<h4>Format</h4>
						</label>
						<input
							type="text"
							id="format"
							value={this.state.format}
							className="form-control"
							onChange={this.handleChange}
						/>
						<button className="btn btn-default m-3">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddBook;
