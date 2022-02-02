import { useRoutes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import routes from './utils/routes';


function App() {
  const element = useRoutes(routes)
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto">
        {element}
      </div>
    </div>
  );
}

export default App;
