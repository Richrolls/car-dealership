import { useState, useEffect } from 'react'

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([])
  const [inventoriedAutos, setInventoriedAutos] = useState([]);



  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/appointments/')
    if (response.ok){
      const data = await response.json();
      setAppointments(data.appointments)
    }
  }

  const getInventoriedAutosData = async () => {
    const response = await fetch('http://localhost:8100/api/automobiles/')
    if (response.ok){
      const data = await response.json();
      setInventoriedAutos(data.autos[0])
      console.log(inventoriedAutos)
    }
  }

  useEffect(()=> {
    getData()
    getInventoriedAutosData()
  }, [])


  const handleDelete = async (e) => {
    const url = `http://localhost:8090/api/appointments/${e.target.id}`;

    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      }
    }

    const response = await fetch(url, fetchConfig);
    // const data = await response.json();

    if (response.ok){
      getData()
    }
  }

  return <>
        <div className='offset-2 col-8 bg-info'>
          <div className="shadow p-4 mt-4">
            <div className='flex justify-content-center'>
              <h1 className='text-center text-white'>Service appointments</h1>
            </div>
              <table className="table">
                  <thead>
                      <tr>
                          <th className='text-center'>VIN</th>
                          <th className='text-center'>Customer name</th>
                          {/* <th className='text-center'>Date</th> */}
                          <th className='text-center'>Time</th>
                          <th className='text-center'>Technician</th>
                          <th className='text-center'>Reason</th>
                          <th className='text-center'>Action</th>
                      </tr>
                  </thead>
                  VIP

                  <tbody className='bg-dark'>
                    {
                    appointments.filter((appointment) => appointment.vin.includes(inventoriedAutos.vin))
                    .map((appointment) => {
                        return (


                          <tr className='bg-dark' key={appointment.id}>
                              <td className='text-center text-white'>{ appointment.vin }</td>
                              <td className='text-center text-white'>{ appointment.customer_name }</td>
                              <td className='text-center text-white'> { appointment.time }</td>
                              <td className='text-center text-white'>{ appointment.technician.name }</td>
                              <td className='text-center text-white'>{ appointment.reason }</td>
                              <td className='text-center text-white'>
                                <button onClick={handleDelete} id={appointment.id} className="btn btn-danger">Cancel</button>
                                <button onClick={handleDelete} id={appointment.id} className="btn btn-primary">Finished</button>
                                </td>

                          </tr>
                          );
                      })
                      }
                  </tbody>



                        ###



                  <tbody>
                      {
                      appointments.map(appointment => {
                          return (
                          <tr className='bg-light' key={appointment.id}>
                              <td className='text-center'>{ appointment.vin }</td>
                              <td className='text-center'>{ appointment.customer_name }</td>
                              <td className='text-center'> { appointment.time }</td>
                              <td className='text-center'>{ appointment.technician.name }</td>
                              <td className='text-center'>{ appointment.reason }</td>
                              <td className='text-center'>
                                <button onClick={handleDelete} id={appointment.id} className="btn btn-danger">Cancel</button>
                                <button onClick={handleDelete} id={appointment.id} className="btn btn-primary">Finished</button>
                                </td>

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

export default AppointmentsList;
