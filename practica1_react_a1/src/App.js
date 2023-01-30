import React from 'react'
import './style/style.css';
// Importamos el archivo ejercicio1.js

function App() {
  return (
    <div className='App'>
          <Persona />
          <Input />
          <Input />
          <Input />
          <Enviar onClick={() => alert("Enviados")} />
      </div>
  );
}

// Componente que muestra la cabecera de la página
const Persona = () =>{
  return (
      <div className='personas'>
          <h2>2n DAW  </h2>
          <h2>Jonathan y Herson</h2>
      </div>
  )
}

// Componente que renderiza un input y su lógica de manejo de estado
const Input = () => {
  return (
      <div>
          <form action="#" className="form">
              <div className="container-input">
                  <input type="text" className="datos" name="user" id="user" placeholder='Introduce datos...'/>
              </div>
          </form> 
      </div>
  )
}

// Componente que renderiza el botón de enviar
const Enviar = () => {
  return (
      <div className='boton'>
          <input type="submit" value="Enviar"/>
      </div>
  )
}

export default App;
