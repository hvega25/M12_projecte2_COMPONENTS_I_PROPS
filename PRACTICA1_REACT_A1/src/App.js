import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nom_grupo />
      <Integrantes/>
      <Teclear/>
    </div>
  );
}


const Nom_grupo = () => {
  return (
    <div>
      <h2>
        Grupo E
      </h2>
    </div>
  );
};

const Integrantes = () => {
  return (
    <div>
      <h2>Jonathan Valle</h2>
      <h2>Herson Vega</h2>
      
    </div>
  );
};

const Teclear = () => { 
  return (
    <div>
     <input placeholder='Escribe algo'></input> 
     <input placeholder='Escribe algo 2'></input> 
     <input placeholder='Escribe algo 3'></input> 
    </div>
  )
}

export default App;
