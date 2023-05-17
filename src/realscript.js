import React from 'react';
import './mystyle.css';

function SelectNumber(prop){
    const [inputValue, estableceValor] = React.useState(0);
    const [randomNumber, estableceRandomNumber] = React.useState(generateRandomNumber(prop.maxValue));

    const inputChange = function(event){
        estableceValor(Number(event.target.value));
    };

    const botonClick = function(){
        if(inputValue === randomNumber){
            alert("Ganaste, que grande eres!!!");
        }else{
            alert("Intentalo de nuevo, el numero era: " + randomNumber);
        };
        estableceRandomNumber(generateRandomNumber(prop.maxValue));
        estableceValor(0);

    };  
    function generateRandomNumber(maxValue){
        return Math.floor(Math.random() * maxValue) + 1;
    };

    return(
        <div className='inputButton'>
            <h2 className='title2'>Selecciona un numero del 1 al 10 y prueba tu suerte!!!</h2>
            <input className='input' type='number' onChange={inputChange} value={inputValue} max={10}/>

            <button className='boton' onClick={botonClick}>Vamos!!!</button>
        </div>
    )

};

export default SelectNumber;