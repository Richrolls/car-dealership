import { useState, useEffect } from 'react'

const AutomobilesList = () => {
  const [autos, setAutos] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/automobiles/')
    if (response.ok){
      const data = await response.json();
      setAutos(data.autos)
    }
  }

  useEffect(()=> {
    getData()
  }, [])

  const handleDelete = async (e) => {
    const url = `http://localhost:8100/api/automobiles/${e.target.id}`;

    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      }
    }

    const response = await fetch(url, fetchConfig);

    if (response.ok){
      getData()
    }
  }

  return <>
        <div className='offset-2 col-8 bg-info'>
          <div className="shadow p-4 mt-4">
            <div className='flex justify-content-center'>
              <h1 className='text-center text-white'>Automobiles</h1>
            </div>
              <table className="table">
                  <thead>
                      <tr>
                          <th className='text-center'>VIN</th>
                          <th className='text-center'>Color</th>
                          <th className='text-center'>Year</th>
                          <th className='text-center'>Model</th>
                          <th className='text-center'>Manufacturer</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                      autos.map(auto => {
                          return (
                          <tr className='bg-light' key={auto.id}>
                              <td className='text-center'>{ auto.vin }</td>
                              <td className='text-center'>{ auto.color }</td>
                              <td className='text-center'>{ auto.year }</td>
                              <td className='text-center'>{ auto.model.name }</td>
                              <td className='text-center'>{ auto.model.manufacturer.name }</td>
                              <td className='text-center'><button onClick={handleDelete} id={auto.vin} className="btn btn-danger">Delete</button></td>
                          </tr>
                          );
                      })
                      }
                  </tbody>
              </table>
          </div>
          </div>
    </>
}

export default AutomobilesList
