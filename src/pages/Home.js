import '../Components/Home/Home.css';

export default function Home() {
    return (
        <div className="container">      
            
            <div className="div-foto">
                <img style={{width: "200px"}} className="foto-perfil" alt="FotoPerfil" src={'https://i.ibb.co/KLZv0Ht/IMG-20210101-001430.jpg'}></img>
            </div>   
            
            <div>
                <p>Jose Gabriel Castillo Mosquera</p>
                <p>Ingeniero de Sistemas</p>
                <p>Apasionado por las tegnologias </p>

            </div> 
                      
        </div>
    )
}
