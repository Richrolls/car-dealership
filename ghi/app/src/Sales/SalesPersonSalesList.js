import { useState, useEffect } from 'react'

const SalesPersonSaleList = () => {
  const [salespeople, setSalespeople] = useState([])
  const [sales, setSales] = useState([])
  const [filterTerm, setFilterTerm] = useState("")

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
    getSalespersonData();
    getSalesData();
  }, [])

  const handleSalesPersonChange = (e) => {
    const value = e.target.value;
    console.log(value)
    setFilterTerm(value);
}

  return <>
        <div className='offset-2 col-8 bg-info'>
            <div className="shadow p-4 mt-4">
                <div className='flex justify-content-center'>
                    <h1 className='text-center text-white'>Sales Person History</h1>
                    <select onChange={handleSalesPersonChange} required name='person_id' id='person_id' className='form-control'>
                        <option value=''>Choose a salesperson</option>
                            {salespeople.map(person => {
                                return (
                                    <option key={person.id} value={person.name}>
                                        {person.name}
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
                      sales
                        .filter((sale) => sale.salesperson.name.includes(filterTerm))
                        .map(sale => {
                          return (
                          <tr className='bg-light' key={sale.id}>
                              <td className='text-center'>{ sale.salesperson.name }</td>
                              <td className='text-center'> { sale.potential_customer.name }</td>
                              <td className='text-center'>{ sale.automobile.vin }</td>
                              <td className='text-center'>{ sale.price }</td>
                          </tr>
                          );
                      })
                      }
                  </tbody>
              </table>
          </div>
    </>
}

export default SalesPersonSaleList
