import { useState, useEffect } from 'react'

const ModelList = () => {
  const [models, setModels] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8100/api/models/')
    if (response.ok){
      const data = await response.json();
      setModels(data.models)
    }
  }

  useEffect(()=> {
    getData()
  }, [])

  const handleDelete = async (e) => {
    const url = `http://localhost:8100/api/models/${e.target.id}`;

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
              <h1 className='text-center text-white'>Vehicle Models</h1>
            </div>
              <table className="table">
                  <thead>
                      <tr>
                          <th className='text-center'>Name</th>
                          <th className='text-center'>Manufacturer</th>
                          <th className='text-center'>Picture</th>
                          <th className='text-center'>Delete</th>

                      </tr>
                  </thead>
                  <tbody>
                      {
                      models.map(model => {
                          return (
                          <tr className='bg-light' key={model.id}>
                              <td className='text-center'>{ model.name }</td>
                              <td className='text-center'>{ model.manufacturer.name }</td>
                              <td className='text-center'><img src={ model.picture_url } width={400} height={200} /></td>
                              <td className='text-center'><button onClick={handleDelete} id={model.id} className="btn btn-danger">Delete</button></td>
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

export default ModelList
