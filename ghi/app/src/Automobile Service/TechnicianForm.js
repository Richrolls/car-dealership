import React, { useEffect, useState } from "react";

const TechnicianForm = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.name = name;
    data.employee_number = employeeNumber;
    data.picture_url = pictureUrl;


    console.log(data);

    const techniciansUrl = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(techniciansUrl, fetchConfig);
    if (response.ok) {
      const newTechnician = await response.json();
      console.log(newTechnician);
      setName("");
      setEmployeeNumber("");
      setPictureUrl("");
    }
  };
  const [name, setName] = useState("");
  const [employeeNumber, setEmployeeNumber] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmployeeNumberChange = (event) => {
    const value = event.target.value;
    setEmployeeNumber(value);
  };

  const handlePictureUrlChange = (event) => {
    const value = event.target.value;
    setPictureUrl(value);
  };


//   useEffect(() => {
//     fetchData();
//   }, []);

  return (
    <div className="my-5 container">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a technician</h1>
          <form onSubmit={handleSubmit} id="create-technician-form">
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
            <div className="form-floating mb-3">
              <input
                value={employeeNumber}
                onChange={handleEmployeeNumberChange}
                placeholder="employeeNumber"
                required
                type="number"
                id="employeeNumber"
                className="form-control"
                name="employeeNumber"
              />
              <label htmlFor="employeeNumber">Employee Number</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={pictureUrl}
                onChange={handlePictureUrlChange}
                placeholder="pictureUrl"
                required
                type="text"
                id="pictureUrl"
                className="form-control"
                name="pictureUrl"
              />
              <label htmlFor="pictureUrl">Picture Url</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TechnicianForm;