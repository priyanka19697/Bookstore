import React, { Component } from 'react';
import BookApi from './data/BookApi';
import ViewBooks from './components/ViewBooks';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
		};
	}

	componentDidMount() {
		BookApi.getAllBooks(data => this.setState({ books: data }));
	}

	render() {
		console.log('from app', this.state.books);
		return (
			<div className="App">
				<ViewBooks books={this.state.books} />
			</div>
		);
	}
}

export default App;
