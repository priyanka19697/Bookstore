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

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={ViewBooks} />
						<Route exact path="/addbook" component={AddBook} />
						<Route exact path="/edit/:bookId" component={AddBook} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
