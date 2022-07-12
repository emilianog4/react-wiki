import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lista from "./components/Lista";
import Cuadricula from "./components/Cuadricula";
import { useState, useEffect } from 'react';

function App() {

  const [vista, setVista] = useState();

  const lista = () => {
    setVista('lista');
  }
  const cuadricula = () => {
    setVista('cuadricula');
  }

  useEffect(() => {
      if(vista==='lista'){
        <Lista />
      }
      if(vista==='cuadricula'){
        <Cuadricula />
  }}
  );
  
  return (
    <>
      <div className="container-links">
        <button className="btn btn-primary btn-lg" onClick={lista} >
          Lista
        </button>
        <button className="btn btn-primary btn-lg" onClick={cuadricula}>
          Cuadricula
        </button>
      </div>

      <div className="condicional">
        { vista==='lista' ? <Lista /> : <Cuadricula /> }
      </div>

    </>
  );
}

export default App;

//     <Router>
//   <Routes>
//     <Route path="/lista" element={<Lista />}/>
//     <Route path="/cuad" element={<Cuadricula />}/>
//   </Routes>
// </Router>
