import React, { useEffect, useState } from "react";

function SaleForm() {
  const [automobiles, setAutomobiles] = useState([]);
  const [salesPeople, setSalesPeople] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [soldAutomobiles, setSoldAutomobiles] = useState([]);
  const [formData, setFormData] = useState({
    price: "",
    automobile: "",
    sales_person_id: "",
    potential_customer_id: "",
  });

  const getSoldAutomobileData = async () => {
    const url = "http://localhost:8090/api/sales/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSoldAutomobiles(data.sales);
    }
  };

  const getAutomobileData = async () => {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setAutomobiles(data.autos);
    }
  };

  const getSalesPersonData = async () => {
    const url = "http://localhost:8090/api/salespeople/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalesPeople(data.sales_people);
    }
  };

  const getCustomerData = async () => {
    const url = "http://localhost:8090/api/customers/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setCustomers(data.potential_customers);
    }
  };

  useEffect(() => {
    getAutomobileData();
    getSalesPersonData();
    getCustomerData();
    getSoldAutomobileData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const salesUrl = "http://localhost:8090/api/sales/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(salesUrl, fetchConfig);

    if (response.ok) {
      setFormData({
        price: "",
        automobile: "",
        sales_person_id: "",
        potential_customer_id: "",
      });
    }
    window.location.reload();
  };

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({
      ...formData,

      [inputName]: value,
    });
  };

  const getAvailableAutomobiles = () => {
    let arr = [...automobiles];
    const soldCars = {};
    for (const soldAutomobile of soldAutomobiles) {
      soldCars[soldAutomobile.automobile.import_href] =
        soldAutomobile.automobile.import_href;
    }
    for (let i = 0; i < arr.length; i++) {
      if (automobiles[i].href in soldCars) {
        delete arr[i];
      }
    }
    return arr;
  };

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a new sale</h1>
          <form onSubmit={handleSubmit} id="create-vehicle-model-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormChange}
                value={formData.price}
                placeholder="Price"
                required
                type="text"
                name="price"
                id="price"
                className="form-control"
              />
              <label htmlFor="price">Price</label>
            </div>
            <div className="mb-3">
              <select
                onChange={handleFormChange}
                value={formData.automobile}
                required
                name="automobile"
                id="automobile"
                className="form-control"
              >
                <option value="">Choose an automobile</option>
                {getAvailableAutomobiles().map((automobile) => {
                  return (
                    <option key={automobile.vin} value={automobile.vin}>
                      {automobile.vin}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <select
                onChange={handleFormChange}
                value={formData.sales_person_id}
                required
                name="sales_person_id"
                id="sales_person_id"
                className="form-control"
              >
                <option value="">Choose a sales person</option>
                {salesPeople.map((salesPerson) => {
                  return (
                    <option key={salesPerson.id} value={salesPerson.id}>
                      {salesPerson.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-3">
              <select
                onChange={handleFormChange}
                value={formData.potential_customer_id}
                required
                name="potential_customer_id"
                id="potential_customer_id"
                className="form-control"
              >
                <option value="">Choose a customer</option>
                {customers.map((customer) => {
                  return (
                    <option key={customer.id} value={customer.id}>
                      {customer.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SaleForm;
