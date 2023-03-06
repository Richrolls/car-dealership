import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import CreateVehicleModel from './VehicleModels/CreateVehicleModel'
import VehicleModelsList from './VehicleModels/ListVehicleModels';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models">
            <Route index element={<VehicleModelsList/>} />
            <Route path="new" element={<CreateVehicleModel />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
