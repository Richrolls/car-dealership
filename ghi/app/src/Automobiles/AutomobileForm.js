import React, { useEffect, useState } from "react";

const AutomobileForm = () => {
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [model_id, setModelId] = useState("");
  const [model_ids, setModelIds] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.color = color;
    data.year = year;
    data.vin = vin;
    data.model_id = model_id;



    const automobileUrl = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(automobileUrl, fetchConfig);
    if (response.ok) {
      setColor("");
      setYear("");
      setVin("");
      setModelId("");
    }
  };

  const fetchData = async () => {
    const url = "http://localhost:8100/api/models/";

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setModelIds(data.models);
    }
  };

  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  };

  const handleYearChange = (event) => {
    const value = event.target.value;
    setYear(value);
  };

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };

  const handleModelIdChange = (event) => {
    const value = event.target.value;
    setModelId(value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="my-5 container">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add an automobile to inventory</h1>
          <form onSubmit={handleSubmit} id="create-conference-form">
            <div className="form-floating mb-3">
              <input
                value={color}
                onChange={handleColorChange}
                placeholder="Color"
                required
                type="text"
                id="color"
                className="form-control"
                name="color"
              />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={year}
                onChange={handleYearChange}
                placeholder="year"
                required
                type="text"
                id="year"
                className="form-control"
                name="year"
              />
              <label htmlFor="year">Year</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={vin}
                onChange={handleVinChange}
                placeholder="vin"
                required
                type="text"
                id="vin"
                className="form-control"
                name="vin"
              />
              <label htmlFor="vin">VIN</label>
            </div>
            <div className="mb-3">
              <select
                value={model_id}
                onChange={handleModelIdChange}
                required
                id="modelId"
                className="form-select"
                name="modelId"
              >
                <option value="">Choose a Model</option>
                {model_ids.map((model_id) => {
                  return (
                    <option value={model_id.id} key={model_id.id}>
                      {model_id.name}
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
};

export default AutomobileForm;
