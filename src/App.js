import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BookApi from './data/BookApi';
import ViewBooks from './components/ViewBooks';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';

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

	addBook = book => {
		book.id = Math.random();
		let books = [...this.state.books, book];
		this.setState({
			books: books,
		});
	};

	componentDidMount() {
		BookApi.getAllBooks(data => this.setState({ books: data }));
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<ViewBooks books={this.state.books} />
					<Switch>
						<Route exact path="/" component={ViewBooks} />
						<Route path="/addbook" component={AddBook} />
						<Route path="/:post_id" component={AddBook} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
