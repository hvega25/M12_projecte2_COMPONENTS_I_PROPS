import React from 'react';
import { useState } from 'react';
import "./style/style.css";
function App() {
  return (
    <div className='App'>
        <User grupo="2n Daw" name="Jonathan Valle"></User>
        <User grupo="2n Daw" name="Herson Vega"></User>
        <Input place="Introduzca un dato..."></Input>
    </div>
  );
}

// Se crea el componente User, recibe props (props.group y props.name)
const User = (props) => {
  return (
      <div className='personas'>
          <h2>{props.grupo} {props.name}</h2>
      </div>
  )
}

const Input = (props) => {
  // Se crean los estados para los inputs
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
   // Se crean los estados para los valores de los inputs
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  // Se crea un estado para mostrar o no los inputs
  const [showInputs, setShowInputs] = useState(false);
  // Se crea la función handleSubmit para manejar el evento de submit del form
  const handleSubmit = (event) => {
      event.preventDefault();
       // Se actualiza el estado showInputs a true
      setShowInputs(true);
      console.log("Resultado por pantalla: ", input1, input2, input3);
      // Se actualizan los valores de los inputs
      setInput1Value(input1)
      setInput2Value(input2)
      setInput3Value(input3)
      // Se limpian los inputs
      setInput1('')
      setInput2('')
      setInput3('')
  }

  return (
      // Se crea un formulario con el evento onSubmit que llama a la función handleSubmit
      <div>
          <form action='#' className='form' onSubmit={handleSubmit}>
              <div className='container-input'>
                  <input type="text" className='datos' placeholder={props.place} onChange={(e) => setInput1(e.target.value)} value={input1} />
                  <input type="text" className='datos' placeholder={props.place} onChange={(e) => setInput2(e.target.value)} value={input2} />
                  <input type="text" className='datos' placeholder={props.place} onChange={(e) => setInput3(e.target.value)} value={input3} />
                  <div className='boton'>
                      <input type="submit" value="Enviar" />
                  </div>
              </div>
              {showInputs ? 
                  <div className='resultado'>
                      <li>{input1Value}</li>
                      <li>{input2Value}</li>
                      <li>{input3Value}</li>
                  </div> : null
              }
          </form>
      </div>
  );
}

export default App;
