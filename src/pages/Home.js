import '../Components/Home/Home.css';

export default function Home() {
    return (
        <div className="container">      
            
            <div className="div-foto">
                <img style={{width: "200px"}} className="foto-perfil" alt="FotoPerfil" src={'https://i.ibb.co/KLZv0Ht/IMG-20210101-001430.jpg'}></img>
            </div>   
            
            <div className="div-parrafos">
                <p style={{fontSize: "35px"}}>Jose Gabriel Castillo Mosquera</p>                
                <p style={{fontSize: "18px"}}>Ingeniero de Sistemas</p><br></br>
                <p>Tengo una gran pasión por las tecnologías me agrada mucho el desarrollo 
                    web adémas, me gusta estar capacitandome cada día y así
                    siempre aprender algo nuevo en este mundo que se actualiza muy rápido</p>
            </div> 
                      
        </div>
    )
}
