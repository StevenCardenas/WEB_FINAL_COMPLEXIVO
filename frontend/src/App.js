import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './componentes/Nav.js'
import Inmuebles from './pages/inmuebles/inmueble.js';
import CrearInmueble from './pages/inmuebles/crearInmueble.js';
import UpdateInmueble from './pages/inmuebles/updateInmueble.js';
/*
<Route exact path='/vehiculos' element={<Vehiculos />} />
          <Route exact path='/addVehiculo' element={<CrearVehiculo />} />
          <Route exact path='/editVehiculo/:placa' element={<UpdateVehiculo />} />
*/
function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route exact path='/inmuebles' element={<Inmuebles />} />    
          <Route exact path='/addInmueble' element={<CrearInmueble />} />  
          <Route exact path='/editInmueble/:id_inmueble' element={<UpdateInmueble />} /> 



        </Routes>
      </Router>

    </div>
  );
}

export default App;
