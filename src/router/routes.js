import NewOrderPage from '../pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';

const routes = [
	{
		Component: NewOrderPage,
		key: 'NewOrder',
		path: '/orders/new'
	},
	{
		Component: OrderHistoryPage,
		key: 'OrderHistory',
		path: '/orders'
	},
	{
		Component: AboutUsPage,
		key: 'AboutUs',
		path: '/about'
	}
];

export default routes;
