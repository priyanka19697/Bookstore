import React, { Component } from 'react';

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
		this.props.addBook(this.state);
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="title">Title : </label>
					<input type="text" id="title" onChange={this.handleChange} />
					<label htmlFor="author">Author : </label>
					<input type="text" id="author" onChange={this.handleChange} />
					<label htmlFor="isbn">ISBN : </label>
					<input type="text" id="isbn" onChange={this.handleChange} />
					<label htmlFor="publicationDate">PublicationDate: </label>
					<input type="text" id="publicationDate" onChange={this.handleChange} />
					<label htmlFor="publisher">Publisher : </label>
					<input type="text" id="publisher" onChange={this.handleChange} />
					<label htmlFor="price">Price : </label>
					<input type="text" id="price" onChange={this.handleChange} />
					<label htmlFor="genre">Genre : </label>
					<input type="text" id="genre" onChange={this.handleChange} />
					<label htmlFor="format">Format : </label>
					<input type="text" id="format" onChange={this.handleChange} />
				</form>
			</div>
		);
	}
}

export default AddBook;
