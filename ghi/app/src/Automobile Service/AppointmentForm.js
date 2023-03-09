import React, {useEffect, useState} from 'react';

function AppointmentForm(){
    const [technicians, setTechnicians] = useState([])
    const [formData, setFormData] = useState({
        customer_name: '',
        date: '',
        time: '',
        reason: '',
        vin: '',
        technician_id: ''
    })

    const getTechnicianData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    }

    useEffect(() => {
        getTechnicianData();
    }, [])

    const handleSubmit = async(event) => {
        event.preventDefault();

        const appointmentUrl = 'http://localhost:8080/api/appointments/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await fetch(appointmentUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                customer_name: '',
                date: '',
                time: '',
                reason: '',
                vin: '',
                technician_id: '',
            })
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,

            [inputName]: value
        });
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a new appointment</h1>
                    <form onSubmit={handleSubmit} id="create-vehicle-model-form">
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} value={formData.customer_name} placeholder="customer_name" required type='text' name='customer_name' id='customer_name' className='form-control' />
                            <label htmlFor='customer_name'>Customer Name</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} value={formData.date} placeholder="date" required type='date' name='date' id='date' className='form-control' />
                            <label htmlFor='date'>Date</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} value={formData.time} placeholder="time" required type='text' name='time' id='time' className='form-control' />
                            <label htmlFor='time'>Appointment time</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} value={formData.reason} placeholder="reason" required type='text' name='reason' id='reason' className='form-control' />
                            <label htmlFor='reason'>Reason</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} value={formData.vin} placeholder="vin" required type='text' name='vin' id='vin' className='form-control' />
                            <label htmlFor='vin'>VIN</label>
                        </div>
                        <div className='mb-3'>
                            <select onChange={handleFormChange} value={formData.technician_id} required name='technician_id' id='technician_id' className='form-control'>
                                <option value=''>Choose a technician</option>
                                    {technicians.map(technician => {
                                        return (
                                            <option key={technician.id} value={technician.id}>
                                                {technician.name}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                        <button className='btn btn-primary'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppointmentForm;
