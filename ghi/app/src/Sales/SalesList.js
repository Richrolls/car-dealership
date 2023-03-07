import { useState, useEffect } from 'react'

const SalesList = () => {
  const [sales, setSales] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8090/api/sales/')
    if (response.ok){
      const data = await response.json();
      setSales(data.sales)
    }
  }

  useEffect(()=> {
    getData()
  }, [])

  const handleDelete = async (e) => {
    const url = `http://localhost:8090/api/sales/${e.target.id}`;

    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      }
    }

    const response = await fetch(url, fetchConfig);
    const data = await response.json();

    if (response.ok){
      getData()
    }
  }

  return <>
        <div className='offset-2 col-8 bg-info'>
          <div className="shadow p-4 mt-4">
            <div className='flex justify-content-center'>
              <h1 className='text-center text-white'>Sales Record</h1>
            </div>
              <table className="table">
                  <thead>
                      <tr>
                          <th className='text-center'>Sales Person</th>
                          <th className='text-center'>Employee ID</th>
                          <th className='text-center'>Customer</th>
                          <th className='text-center'>VIN</th>
                          <th className='text-center'>Price</th>
                          <th className='text-center'>Delete</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                      sales.map(sale => {
                          return (
                          <tr className='bg-light' key={sale.id}>
                              <td className='text-center'>{ sale.salesperson.name }</td>
                              <td className='text-center'>{ sale.salesperson.employee_id }</td>
                              <td className='text-center'> { sale.potential_customer.name }</td>
                              <td className='text-center'>{ sale.automobile.vin }</td>
                              <td className='text-center'>{ sale.price }</td>
                              <td className='text-center'><button onClick={handleDelete} id={sale.id} className="btn btn-danger">Delete</button></td>
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

export default SalesList
