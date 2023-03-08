import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ManufacturersList = () => {
  const [manufacturers, setManufacturers] = useState([]);

  const getData = async () => {
    const resp = await fetch("http://localhost:8100/api/manufacturers/");
    if (resp.ok) {
      const data = await resp.json();
      setManufacturers(data.manufacturers);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (e) => {
    const url = `http://localhost:8100/api/manufacturers/${e.target.id}`;

    const fetchConfigs = {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const resp = await fetch(url, fetchConfigs);
    const data = await resp.json();

    setManufacturers(manufacturers.filter((manufacturer) => String(manufacturer.id) !== e.target.id));
  };

  return (
    <>
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Manufacturers</h1>
            <h2>
              <Link to="/manufacturers/new" className="btn btn-primary">
                Create a Manufacturer
              </Link>
            </h2>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {manufacturers.map((manufacturer) => {
                  return (
                    <tr key={manufacturer.id}>
                      <td>{manufacturer.name}</td>
                      <td>
                        <button
                          onClick={handleDelete}
                          id={manufacturer.id}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManufacturersList;
