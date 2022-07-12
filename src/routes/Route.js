import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Lista from '..components/Lista';
import Cuadricula from './components/Cuadricula';

const route = () => {
  return (
    <>
        <Router>
            <Route path="/lista" component={Lista} >
              <Lista />
            </Route> 
            <Route path="/cuadricula" component={Cuadricula} >
              <Cuadricula />
            </Route>
        </Router>
    </>
  )
}

export default route