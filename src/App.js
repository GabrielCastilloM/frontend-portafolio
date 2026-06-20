import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Portafolio from './pages/Portafolio';
import MostrarRedes from './Components/redes/redes';

function App() {
  return (  
    <div className="App">
      <div className="App-container">            
        <Router>
          <nav className='App-nav' >
            <MostrarRedes/> 
            <ul id='menu'>
              <li>
                <Link to="/" title="Inicio">Inicio</Link>
              </li>            
              <li>
                <Link to="/about" title="Sobre Mi">Sobre Mi</Link>
              </li>
              <li>
                <Link to="/portafolio" title="Portafolio">Portafolio</Link>
              </li>
            </ul>
            <footer >
                <p>Copyright &copy; 2022 </p>
                <p> Hecho por  Gabriel Castillo</p>
              </footer>                         
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
