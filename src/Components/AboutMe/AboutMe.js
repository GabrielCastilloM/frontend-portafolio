import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './AboutMe.css'

function AboutMe(){
    const [information, setInformation] = useState({});
    useEffect(() => {
        axios.get('https://backend-portafolio-gabriel.herokuapp.com/api/v1/about')
        .then(
            res => setInformation(res.data[0])
        )}, [setInformation])
    return(
    <div className="container-aboutMe">
        <div className="nombre">           
            <h1>{information.name}<br></br>{information.profession}</h1>                 
        </div>       
        
        <div className="descripcion">           
            <p className="descripcion-texto">{information.about_me}</p> 
            <p>Participación en proyectos tecnológicos personales en los 
                cuales he adquirido habilidades técnicas en desarrollo web, 
                capaz de generar valor agregado con creación de ideas e 
                iniciativa propia para la resolución de problemas.</p> 
                <p>Habilidades</p>      
            <ul className="skills">
                 
                { information.skills && information.skills.map((skill, index) => 
                    <p className="skill">{skill}</p>
                )}
            </ul>
        </div>
    </div>
    )
};

export default AboutMe;