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
  const [technicians, setTechnicians] = useState([]);
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

  const fetchData = async () => {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechnicians(data.technicians);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="my-5 container">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add an appointment </h1>
          <form onSubmit={handleSubmit} id="create-technician-form">
            <div className="form-floating mb-3">
              <input
                value={customerName}
                onChange={handleCustomerNameChange}
                placeholder="customerName"
                required
                type="text"
                id="customerName"
                className="form-control"
                name="customerName"
              />
              <label htmlFor="customerName">Customer Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={date}
                onChange={handleDateChange}
                placeholder="date"
                required
                type="date"
                id="date"
                className="form-control"
                name="date"
              />
              <label htmlFor="date">Date</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={time}
                onChange={handleTimeChange}
                placeholder="time"
                required
                type="text"
                id="time"
                className="form-control"
                name="time"
              />
              <label htmlFor="time">Time of appointment</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={reason}
                onChange={handleReasonChange}
                placeholder="reason"
                required
                type="text"
                id="reason"
                className="form-control"
                name="reason"
              />
              <label htmlFor="reason">Reason</label>
            </div>
            <div className="form-floating mb-3">
              <input
                value={vin}
                onChange={handleVinChange}
                placeholder="vin"
                required
                type="reason"
                id="vin"
                className="form-control"
                name="vin"
              />
              <label htmlFor="vin">VIN</label>
            </div>
            <div className="mb-3">
              <select
                value={technician}
                onChange={handleTechnicianChange}
                required
                id="technician"
                className="form-select"
                name="technician"
              >
                <option value="">Choose a technician</option>
                {technicians.map((technician) => {
                  return (
                    <option value={technician.id} key={technician.id}>
                      {technician.name}
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

export default AppointmentForm;
