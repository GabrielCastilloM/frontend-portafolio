import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './AboutMe.css'
import fotoDescripcion from '../../assets/img/IMG_about.jpg'

function AboutMe(){
    const [information, setInformation] = useState({});
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API_URL}/about`)
            .then(res => setInformation(res.data[0]))
            .catch(err => console.error(err))
    }, [API_URL])

    return(
    <div className="container-aboutMe">
        <div className="nombre">           
            <h1>{information.name}<br/>{information.profession}</h1>                 
        </div>       
        
        <div className="descripcion"> 
            <p className="descripcion-texto">
                {information.about_me}
                <br/><br/>
                Participación en proyectos tecnológicos personales...
            </p> 
            
            <div className="container-foto">
                <img className="foto-about" alt="FotoAbout" src={fotoDescripcion}/>
            </div>
        </div>

        <p className='habilidades'>Habilidades</p>      
        <ul className="skills">
            { information.skills && information.skills.map((skill, index) => 
                <p className="skill" key={index}>{skill}</p>
            )}
        </ul>
    </div>
    )
};

export default AboutMe;