import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Portafolio.css'

function Portfolio(){
    const [projects, setProjects] = useState({});
    useEffect(() => {
        axios.get('https://backend-portafolio-gabriel.herokuapp.com/portafolio')
        .then(
            res => setProjects(res.data)
        )}, [setProjects])

    return(<>
        <div className="mega-card-portfolio">
            { projects.length > 0 && projects.map((project, index) => 
                    <div className="individual-card">
                    <h1>{project.name}</h1>
                    <img className="imagen-proyecto" alt="imagen-proyecto" src={project.image}></img>
                    <p>{project.description}</p>
                    <a className="boton-visitar" href={project.link}>Visitar Proyecto</a>
                </div>
            )}
        </div>
</>)
};

export default Portfolio;