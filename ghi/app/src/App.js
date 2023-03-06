import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import CreateVehicleModel from './VehicleModels/CreateVehicleModel'
import VehicleModelsList from './VehicleModels/ListVehicleModels';
import Nav from './Nav';
import ManufacturersList from './Manufacturers/ListManufacturers';
import ManufacturerForm from './Manufacturers/CreateManufacturer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="/models">
            <Route index element={<VehicleModelsList/>} />
            <Route path="new" element={<CreateVehicleModel />} />
          </Route>
          <Route path="/manufacturers">
            <Route index element={<ManufacturersList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
