import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Portafolio from './pages/Portafolio';

function App() {
  return (  
    <div className="App">
      <div className="App-container"> 
           
        <Router>
          <nav className='App-nav' >
            <ul id='menu'>
              <li><a title="Inicio"> <Link to="/">Inicio</Link></a></li>            
              <li><a title="Sobre Mi"><Link to="/about">Sobre Mi</Link></a></li>
              <li><a title="Portafolio"><Link to="Portafolio">Portafolio</Link></a></li>                  
            </ul>
          </nav>

          <section className="App-section">          
            <Routes>
              <Route path='/' element={<Home />}/>           
              <Route path='/about' element={<About/>}/>            
              <Route path='/portafolio' element={<Portafolio />}/>             
            </Routes> 
              
          </section>
        
        </Router> 
      </div>    
    </div> 
      
  );
}

export default App;
