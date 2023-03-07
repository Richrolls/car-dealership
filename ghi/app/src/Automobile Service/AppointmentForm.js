import React, { useEffect, useState } from "react";

const AppointmentForm = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {};

    data.customer_name = customerName;
    data.date = date;
    data.time = time;
    data.reason = reason;
    data.vin = vin;
    data.technician = technician;



    console.log(data);

    const appointmentsUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(appointmentsUrl, fetchConfig);
    if (response.ok) {
      const newAppointment = await response.json();
      console.log(newAppointment);
      setCustomerName("");
      setDate("");
      setTime("");
      setReason("");
      setVin("");
      setTechnician("");
    }
  };
  const [customerName, setCustomerName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [vin, setVin] = useState("");
  const [technician, setTechnician] = useState("");

  const handleCustomerNameChange = (event) => {
    const value = event.target.value;
    setCustomerName(value);
  };

  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
  };

  const handleTimeChange = (event) => {
    const value = event.target.value;
    setTime(value);
  };

  const handleReasonChange = (event) => {
    const value = event.target.value;
    setReason(value);
  };

  const handleVinChange = (event) => {
    const value = event.target.value;
    setVin(value);
  };

  const handleTechnicianChange = (event) => {
    const value = event.target.value;
    setTechnician(value);
  };


  useEffect(() => {
    fetchData();
  }, []);

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

export default AppointmentForm;
