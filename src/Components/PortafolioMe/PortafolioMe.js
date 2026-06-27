import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PortafolioMe.css'

function PortafolioMe() {
    const [projects, setProjects] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API_URL}/proyectos`)
            .then(res => setProjects(res.data))
            .catch(err => console.error('Error API:', err))
    }, [API_URL])

    return (
        <div className="mega-card-portfolio">
            {projects.length > 0 && projects.map((project, index) => (
                <div className="individual-card" key={index}>
                    <h3>{project.name}</h3>
                    <img
                        className="imagen-proyecto"
                        alt="imagen-proyecto"
                        src={project.image}
                    />
                    <p>{project.description}</p>
                    <a
                        className="boton-visitar"
                        target="_blank"
                        rel="noreferrer"
                        href={project.link}
                    >
                        Visitar Proyecto
                    </a>
                </div>
            ))}
        </div>
    )
}

export default PortafolioMe;