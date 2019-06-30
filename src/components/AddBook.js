import React, { Component } from 'react';
import { saveBook } from '../data/BookApi';

class AddBook extends Component {
	state = {
		title: null,
		author: null,
		isbn: null,
		publicationDate: null,
		publisher: null,
		price: null,
		genre: null,
		format: null,
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		saveBook(this.state); //adding to state
	};

	render() {
		return (
			<div className="container">
				<div className="form-group">
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="title">
							<h4>Title</h4>
						</label>
						<input type="text" className="form-control" id="title" onChange={this.handleChange} />
						<label htmlFor="author">
							<h4>Author</h4>
						</label>
						<input type="text" id="author" className="form-control" onChange={this.handleChange} />
						<label htmlFor="isbn">
							<h4>ISBN</h4>
						</label>
						<input type="text" id="isbn" className="form-control" onChange={this.handleChange} />
						<label htmlFor="publicationDate" className="">
							<h4>PublicationDate</h4>
						</label>
						<input type="text" id="publicationDate" className="form-control" onChange={this.handleChange} />
						<label htmlFor="publisher" className="">
							<h4>Publisher</h4>
						</label>
						<input type="text" id="publisher" className="form-control" onChange={this.handleChange} />
						<label htmlFor="price" className="">
							<h4>Price</h4>
						</label>
						<input type="text" id="price" className="form-control" onChange={this.handleChange} />
						<label htmlFor="genre" className="">
							<h4>Genre</h4>
						</label>
						<input type="text" id="genre" className="form-control" onChange={this.handleChange} />
						<label htmlFor="format" className="">
							<h4>Format</h4>
						</label>
						<input type="text" id="format" className="form-control" onChange={this.handleChange} />
						<button className="btn btn-default m-3">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default AddBook;
