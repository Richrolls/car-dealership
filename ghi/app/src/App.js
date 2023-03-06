import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ModelForm from './VehicleModels/CreateVehicleModel'
import ModelList from './VehicleModels/ListVehicleModels';
import Nav from './Nav';
import ManufacturersList from './Manufacturers/ListManufacturers';
import ManufacturerForm from './Manufacturers/CreateManufacturer';
import AutomobileForm from './Automobiles/CreateAutomobile';
import AutoMobilesList from './Automobiles/ListAutomobiles';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="/models">
            <Route index element={<ModelList />} />
            <Route path="new" element={<ModelForm />} />
          </Route>
          <Route path="/manufacturers">
            <Route index element={<ManufacturersList />} />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path="/automobiles">
            <Route index element={<AutoMobilesList />} />
            <Route path="new" element={<AutomobileForm />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
