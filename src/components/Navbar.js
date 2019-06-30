import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../index.css';

const Navbar = props => {
	// setTimeout(() => {
	// 	props.history.push('/about');
	// }, 2000);
	return (
		<nav className="nav wrapper red darken-3">
			<div className="container">
				<a href="/" className="brand-logo">Bookstore</a>
				<ul className="right">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/AddBook">AddBook</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
