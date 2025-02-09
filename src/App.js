import './App.css';
import DemoPage from './components/DemoPage';
import Home from './components/Home';
import Navbar from './components/Nabar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='flex mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/demopage' element={<DemoPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
