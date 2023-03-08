import React, {useState} from 'react';

function SalesPersonForm(){
    const [formData, setFormData] = useState({
        name: '',
        employee_id: '',
    })

    const handleSubmit = async(event) => {
        event.preventDefault();

        const customersUrl = 'http://localhost:8090/api/salespeople/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await fetch(customersUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                name: '',
                employee_id: '',
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
                    <h1>Add a new sales person</h1>
                    <form onSubmit={handleSubmit} id="create-customer-form">
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} value={formData.name} placeholder="Name" required type='text' name='name' id='name' className='form-control' />
                            <label htmlFor='name'>Name</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} value={formData.employee_id} placeholder="Address" required type='text' name='employee_id' id='employee_id' className='form-control' />
                            <label htmlFor='employee_id'>Employee ID</label>
                        </div>

                        <button className='btn btn-primary'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SalesPersonForm;
