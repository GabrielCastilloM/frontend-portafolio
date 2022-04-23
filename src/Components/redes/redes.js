
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
  import { faGithub} from '@fortawesome/free-brands-svg-icons'  
  import { SiPlatzi, SiLinkedin } from "react-icons/si";
  import './redes.css'
 

function MostrarRedes(){   
    return(
        <div className='redes-container'>
          <ul>
            <li><a href='https://github.com/GabrielCastilloM' target="_blank" className='githab'><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href='https://platzi.com/p/jgabrielcastillo/' target="_blank"  className='platzi'><SiPlatzi /> </a></li>
            <li><a href='https://www.linkedin.com/in/jose-gabriel-castillo-mosquera-6b162250/' target="_blank" className='Linkedin'><SiLinkedin /></a></li>
          </ul>
       
        </div>
    )
};

export default MostrarRedes;





