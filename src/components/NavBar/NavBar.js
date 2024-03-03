import styles from './NavBar.module.scss'
// MUST CREATE FUNCTIONING NAV BAR . HOME(new order+catalogue) / ABOUT US. / ORDER HISTORY / CART /
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className={styles.NavBar}>
			<button>
			<Link to="/about" className={styles.NavButton}>ABOUT US</Link>
			<Link to="/orders" className={styles.NavButton}>PAST ORDERS</Link>
			<Link to="/orders/new" className={styles.NavButton}>CURRENT ORDERS</Link>
			</button>

		</nav>
	)
}


// what was the intent with this original Template, mapping key/route object from props.routes? I can't find instance of routes being summoned in this file.
// const NavBar = props => {
// 	return (
// 		<nav className="NavBar">
// 			{props.routes.map(({ key, path }) => (
// 				<button>
// 				<Link key={key} to={path}>
// 					{key}
// 				</Link>
// 				</button>
// 			))}
// 		</nav>
// )}
// ;

// export default NavBar;
