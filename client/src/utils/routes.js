import Login from '../components/Login';
import Profile from '../components/Profile';
import CreateQuote from '../components/Quotes/CreateQuote';
import Quotes from '../components/Quotes/Quotes';
import Register from '../components/Register';
const routes = [
    {path: '/', element: <Quotes/>},
    {path: '/register', element: <Register/>},
    {path: '/login', element: <Login/>},
    {path: '/creatQuote', element: <CreateQuote/>},
    {path: '/profile', element: <Profile/>},
];
export default routes