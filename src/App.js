import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Register from './pages/Register';
import Write from './pages/Write';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
       <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/Write' element={<Write/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
