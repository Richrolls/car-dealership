import { useState, useEffect } from "react";

const AppointmentsList = () => {
  const [filterTerm, setFilterTerm] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [inventoriedAutos, setInventoriedAutos] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/api/appointments/");

    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
    }
  };

  const getInventoriedAutosData = async () => {
    const response = await fetch("http://localhost:8080/api/automobiles/");

    if (response.ok) {
      const data = await response.json();
      setInventoriedAutos(data.automobiles);
    }
  };

  useEffect(() => {
    getData();
    getInventoriedAutosData();
  }, []);

  const handleDelete = async (e) => {
    const url = `http://localhost:8080/api/appointments/${e.target.id}`;

    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      getData();
    }
  };

  const getVipAppointments = () => {
    let arr = [...appointments];
    let vipArr = [];

    const autoVins = {};
    for (const auto of inventoriedAutos) {
      autoVins[auto.vin] = auto.vin;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].vin in autoVins) {
        vipArr.push(arr[i]);
      }
    }
    return vipArr;
  };

  const getRegAppointments = () => {
    let arr = [...appointments];
    let regArr = [];

    const autoVins = {};
    for (const auto of inventoriedAutos) {
      autoVins[auto.vin] = auto.vin;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i].vin in autoVins)) {
        regArr.push(arr[i]);
      }
    }
    return regArr;
  };

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  return (
    <div className="offset-2 col-8 bg-info">
      <div className="shadow p-4 mt-4">
        <div className="flex justify-content-center">
          <input placeholder="Search VIN" onChange={handleFilterChange} />
          <h1 className="text-center text-white">VIP Service appointments</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">VIN</th>
              <th className="text-center">Customer name</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Technician</th>
              <th className="text-center">Reason</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-light">
            {getVipAppointments()
              .filter((appointment) => appointment.vin.includes(filterTerm))
              .map((appointment) => {
                return (
                  <tr className="bg-light" key={appointment.id}>
                    <td className="text-center">{appointment.vin}</td>
                    <td className="text-center">{appointment.customer_name}</td>
                    <td className="text-center">{appointment.date}</td>
                    <td className="text-center"> {appointment.time}</td>
                    <td className="text-center">
                      {appointment.technician.name}
                    </td>
                    <td className="text-center">{appointment.reason}</td>
                    <td className="text-center">
                      <button
                        onClick={handleDelete}
                        id={appointment.id}
                        className="btn btn-danger"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDelete}
                        id={appointment.id}
                        className="btn btn-primary"
                      >
                        Finished
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="flex justify-content-center">
          <h1 className="text-center text-white">Service appointments</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">VIN</th>
              <th className="text-center">Customer name</th>
              <th className="text-center">Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Technician</th>
              <th className="text-center">Reason</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-light">
            {getRegAppointments()
              .filter((appointment) => appointment.vin.includes(filterTerm))
              .map((appointment) => {
                return (
                  <tr className="" key={appointment.id}>
                    <td className="text-center">{appointment.vin}</td>
                    <td className="text-center">{appointment.customer_name}</td>
                    <td className="text-center">{appointment.date}</td>
                    <td className="text-center"> {appointment.time}</td>
                    <td className="text-center">
                      {appointment.technician.name}
                    </td>
                    <td className="text-center">{appointment.reason}</td>
                    <td className="text-center">
                      <button
                        onClick={handleDelete}
                        id={appointment.id}
                        className="btn btn-danger"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDelete}
                        id={appointment.id}
                        className="btn btn-primary"
                      >
                        Finished
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsList;
