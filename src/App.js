import './App.css';
import JuegoNumeros from './miJuego';
import SelectNumber from './realscript';


function App() {
 return(
     <div>
       <JuegoNumeros/>

      <SelectNumber maxValue = {10}/>
     </div>
      
 )
}

export default App;
