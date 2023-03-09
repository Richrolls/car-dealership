import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import ModelForm from "./VehicleModels/ModelForm";
import ModelList from "./VehicleModels/ModelsList";
import Nav from "./Nav";
import ManufacturersList from "./Manufacturers/ManufacturersList";
import ManufacturerForm from "./Manufacturers/ManufacturerForm";
import AutomobileForm from "./Automobiles/AutomobileForm";
import AutoMobilesList from "./Automobiles/AutomobilesList";
import CustomerForm from "./Sales/CustomerForm";
import SalesPersonForm from "./Sales/SalesPersonForm";
import SaleForm from "./Sales/SaleForm";
import SalesList from "./Sales/SalesList";
import TechnicianForm from "./Automobile Service/TechnicianForm";
import SalesPersonSaleList from "./Sales/SalesPersonSalesList";
import AppointmentForm from "./Automobile Service/AppointmentForm";
import AppointmentsList from "./Automobile Service/AppointmentsList";

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
          <Route path="/customers">
            <Route path="new" element={<CustomerForm />} />
          </Route>
          <Route path="/salespeople">
            <Route path="new" element={<SalesPersonForm />} />
            <Route path="sales" element={<SalesPersonSaleList />} />
          </Route>
          <Route path="/sales">
            <Route index element={<SalesList />} />
            <Route path="new" element={<SaleForm />} />
          </Route>
          <Route path="/technicians">
            <Route path="new" element={<TechnicianForm />} />
          </Route>
          <Route path="/appointments">
            <Route index element={<AppointmentsList />} />
            <Route path="new" element={<AppointmentForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
