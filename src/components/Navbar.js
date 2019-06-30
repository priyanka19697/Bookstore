import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import '../index.css';

const Navbar = props => {
	// setTimeout(() => {
	// 	props.history.push('/about');
	// }, 2000);
	return (
		<nav className="nav wrapper red darken-3">
			<div className="container">
				<a className="brand-logo">Bookstore</a>
				<ul className="right">
					<li>
						<Link to="/">Home</Link>>
					</li>
					<li>
						<NavLink to="/AddBook">AddBook</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
