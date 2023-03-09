import React, { useState } from "react";

const ManufacturerForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = name;
    const manufacturersUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(manufacturersUrl, fetchConfig);
    if (response.ok) {
      setName("");
    }
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <div className="my-5 container">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a manufacturer</h1>
          <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
              <input
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                required
                type="text"
                id="name"
                className="form-control"
                name="name"
              />
              <label htmlFor="name">Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerForm;
