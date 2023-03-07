import { useState, useEffect } from 'react'

const SalesList = () => {
  const [salespeople, setSalespeople] = useState([])
  const [sales, setSales] = useState([])

  const getSalespersonData = async () => {
    const response = await fetch('http://localhost:8090/api/salespeople/')
    if (response.ok){
      const data = await response.json();
      setSalespeople(data.sales_people)
    }
  }

  const getSalesData = async () => {
    const response = await fetch('http://localhost:8090/api/sales/')
    if (response.ok){
      const data = await response.json();
      setSales(data.sales)
    }
  }


  useEffect(()=> {
    getSalespersonData(),
    getSalesData()
  }, [])

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    sales.
}

  return <>
        <div className='offset-2 col-8 bg-info'>
            <div className="shadow p-4 mt-4">
                <div className='flex justify-content-center'>
                    <h1 className='text-center text-white'>Sales Person History</h1>
                    <select onChange={handleFormChange} value={formData.potential_customer_id} required name='salesperson_id' id='salesperson_id' className='form-control'>
                            <option value=''>Choose a salesperson</option>
                                {salespeople.map(salesperson => {
                                    return (
                                        <option key={salesperson.id} value={salesperson.id}>
                                            {salesperson.name}
                                        </option>
                                    )
                                })}
                    </select>
                </div>
            </div>
              <table className="table">
                  <thead>
                      <tr>
                          <th className='text-center'>Sales Person</th>
                          <th className='text-center'>Customer</th>
                          <th className='text-center'>VIN</th>
                          <th className='text-center'>Price</th>
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
    </>
}

export default SalesList
