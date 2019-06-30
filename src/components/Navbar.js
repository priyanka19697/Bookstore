import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../index.css';

const Navbar = props => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="/">
					<h2>
						<b>Bookstore</b>
					</h2>
				</a>

				<ul className="nav nav-bar right px-2">
					<li className="nav-item active m-2">
						<h3>
							<Link to="/"> Home </Link>
						</h3>
					</li>
					<li className="m-2">
						<h3>|</h3>
					</li>
					<li className="nav-item active m-2">
						<h3>
							<Link to="/addBook"> AddBook </Link>
						</h3>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
