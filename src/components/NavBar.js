// MUST CREATE FUNCTIONING NAV BAR . HOME(new order+catalogue) / ABOUT US. / ORDER HISTORY / CART /
import { Link } from 'react-router-dom';

const NavBar = props => {
	return (
		<nav className="NavBar">
			{props.routes.map(({ key, path }) => (
				<Link key={key} to={path}>
					{key}
				</Link>
			))}
		</nav>
	);
};

export default NavBar;
