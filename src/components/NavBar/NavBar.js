import styles from './NavBar.module.scss'
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
