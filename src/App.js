import './App.css';
import Home from './Home.js';
import View from './View';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Update from './Update';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='bg'>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/view' element={<View />} />
        <Route exact path='/update' element={<Update />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
