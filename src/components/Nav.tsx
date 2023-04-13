import { Link } from "react-router-dom";

function Nav() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/vehicle-models">VehicleModels</Link>
					</li>
					<li>
						<Link to="/customer-stories">CustomerStories</Link>
					</li>
					<li>
						<Link to="/team">Team</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
