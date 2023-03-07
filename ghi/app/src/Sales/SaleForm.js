import React, {useEffect, useState} from 'react';

function SaleForm(){
    const [automobiles, setAutomobiles] = useState([])
    const [salespeople, setSalespeople] = useState([])
    const [customers, setCustomers] = useState([])
    const [formData, setFormData] = useState({
        price: '',
        automobile_id: '',
        salesperson_id: '',
        potential_customer_id: '',
    })

    const getAutomobileData = async () => {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos);
        }
    }

    const getSalespersonData = async () => {
        const url = 'http://localhost:8090/api/salespeople/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.sales_people);
        }
    }

    const getCustomerData = async () => {
        const url = 'http://localhost:8090/api/customers/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setCustomers(data.potential_customers);
        }
    }

    useEffect(() => {
        getAutomobileData();
        getSalespersonData();
        getCustomerData();
    }, [])

    const handleSubmit = async(event) => {
        event.preventDefault();

        const salesUrl = 'http://localhost:8090/api/sales/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await fetch(salesUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                price: '',
                automobile_id: '',
                salesperson_id: '',
                potential_customer_id: '',
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
                    <h1>Add a new sale</h1>
                    <form onSubmit={handleSubmit} id="create-vehicle-model-form">
                        <div className='form-floating mb-3'>
                            <input onChange={handleFormChange} value={formData.price} placeholder="Price" required type='text' name='price' id='price' className='form-control' />
                            <label htmlFor='price'>Price</label>
                        </div>
                        <div className='mb-3'>
                            <select onChange={handleFormChange} value={formData.automobile_id} required name='automobile_id' id='automobile_id' className='form-control'>
                                <option value=''>Choose an automobile</option>
                                    {automobiles.map(automobile => {
                                        return (
                                            <option key={automobile.id} value={automobile.id}>
                                                {automobile.vin}
                                            </option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className='mb-3'>
                            <select onChange={handleFormChange} value={formData.salesperson_id} required name='salesperson_id' id='salesperson_id' className='form-control'>
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
                        <div className='mb-3'>
                            <select onChange={handleFormChange} value={formData.potential_customer_id} required name='potential_customer_id' id='potential_customer_id' className='form-control'>
                                <option value=''>Choose a customer</option>
                                    {customers.map(customer => {
                                        return (
                                            <option key={customer.id} value={customer.id}>
                                                {customer.name}
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

export default SaleForm;
