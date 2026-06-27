import '../Components/Home/Home.css';
import fotoPerfil from '../assets/img/IMG_perfil.jpg'

export default function Home() {
    return (
        <div className="container">      
            
            <div className="div-foto">
                <img style={{width: "300px"}} className="foto-perfil" alt="FotoPerfil" src={fotoPerfil}></img>
            </div>   
            
            <div className="div-parrafos">
                <p style={{fontSize: "35px"}}>Jose Gabriel Castillo Mosquera</p>                
                <p style={{fontSize: "18px"}}>Ingeniero de Sistemas | Full Stack Developer | QA Tester</p><br></br>
                <p> Apasionado por el desarrollo de software y la creación de soluciones web completas, con experiencia como <strong>Full Stack Developer</strong> y <strong>QA Tester</strong>. </p>
                <p> Trabajo principalmente en el desarrollo de aplicaciones con <strong>PHP (Laravel)</strong> y bases de datos <strong>MySQL</strong>, complementado con desarrollo frontend en <strong>React, HTML, CSS utilizando frameworks como <strong>Bootstrap</strong> y <strong>Tailwind</strong> y JavaScript</strong>. </p>
                <p> Cuento con experiencia en aseguramiento de calidad (QA), realizando <strong>pruebas funcionales</strong>, diseño y ejecución de casos de prueba, así como <strong>reporte y seguimiento de errores</strong>, lo que me permite garantizar soluciones más robustas y confiables. </p>
                <p> Me enfoco en construir soluciones eficientes, mantener altos estándares de calidad y adaptarme constantemente a nuevas tecnologías en un entorno en evolución. </p>
            </div> 
                      
        </div>
    )
}
