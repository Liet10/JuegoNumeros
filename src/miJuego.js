import imagen from './images/monoFondo.webp';
import './mystyle.css';



function JuegoNumeros(){
    
    return(
        <div className="main">
            <h1 className="title">Venga!!! acierta.</h1>
            <img className="imagen" src= {imagen} alt="imagen/Juego" width="400" hight="400"/>            
        </div>
    )
    
}
export default JuegoNumeros;