import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);
    }

    const handleOnSubmit = (e) => {
        console.log(formData, 'formData');
        e.preventDefault();
    }

    return (
    <div className='md:w-4/12 w-10/12 mx-auto'>
            <h5 className="text-2xl text-slate-900">Login</h5>
            <form onSubmit={handleOnSubmit} className='flex flex-col'>
                <input 
                type="email" 
                className="border border-gray-800 py-1 px-3 text-xl focus:outline-none rounded my-4" 
                placeholder="Enter Your Email" 
                name="email" 
                value={formData?.email} 
                onChange={handleOnChange} 
                id="email"
                required
                 />
                <input 
                type="password" 
                name="password" 
                className="border border-gray-800 py-1 px-3 text-xl focus:outline-none rounded my-4"
                placeholder="Enter your password"
                value={formData?.password} 
                onChange={handleOnChange} 
                id="password"
                required />
                <button type="submit" className="py-3 px-4 bg-slate-900 inline-block w-4/12 text-center text-xl text-slate-50 rounded">Submit</button>
            </form>
        </div>
    );
};

export default Login;