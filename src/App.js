import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
	

	addBook = book => {
		book.id = Math.random();
		let books = [...this.state.books, book];
		this.setState({
			books: books,
		});
	};


	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					{/* <ViewBooks books={this.state.books} /> */}
					<Switch>
						<Route exact path="/" component={ViewBooks} />
						<Route exact path="/addbook" component={AddBook} />
						{/* <Route path="/:post_id" component={AddBook} /> */}
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
