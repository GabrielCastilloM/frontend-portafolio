import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './PortafolioMe.css'

function PortafolioMe(){
    const [projects, setProjects] = useState({});
    useEffect(() => {
        axios.get('https://backend-portafolio-gabriel.herokuapp.com/api/v1/proyectos')
        // axios.get('http://localhost:4000/api/v1/proyectos')
        .then(
            res => setProjects(res.data)
        )}, [setProjects])

    return(<>
    
        <div className="mega-card-portfolio">            
            { projects.length > 0 && projects.map((project, index) => 
                <div className="individual-card">
                    <h3>{project.name}</h3>                    
                    <img className="imagen-proyecto" alt="imagen-proyecto" src={project.image}></img>
                    <p>{project.description}</p>
                    <a className="boton-visitar" target="_blank" href={project.link}> Visitar Proyecto </a>                   
                </div>
            )}            
      
        </div>
        
</>)
};

export default PortafolioMe;