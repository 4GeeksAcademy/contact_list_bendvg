import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light">
			<div className="container d-flex justify-content-end">
				<Link to="/demo">
					<button className="btn btn-primary">Add contact</button>
				</Link>
			</div>
		</nav>
	);
};