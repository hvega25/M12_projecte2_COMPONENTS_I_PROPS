import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nom grupo="Grupo E" integrante=" Herson Vega" />
      <Nom grupo="Grupo E" integrante=" Jonathan Valle" />
      <Teclear place="Escribe algo "/>
    </div>
  );
}


const Nom = (props) => {
  return (
    <div>
      <h2> {props.grupo} {props.integrante}</h2>
    </div>
  );
};



const Teclear = (props) => {
  return (
    <div>
      <input placeholder={props.place} ></input>  <br></br>
      <input placeholder={props.place} ></input>  <br></br>
      <input placeholder={props.place} ></input>  <br></br>
    </div>
  )
}

export default App;