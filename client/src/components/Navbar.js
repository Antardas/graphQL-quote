import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';




const Navbar = () => {
    return (
        <div className='flex justify-between bg-violet-700 px-10 py-2'>
            <div className='w-2/12'> 
                <div className="w-10">
                        <img src={logo} className='w-full' alt="" />
                   
                </div>
            </div>
            <div className='w-10/12 flex justify-end'>
                <ul className='flex align-middle mt-2 justify-between  text-lg font-semibold'>
                    <li className='px-3'><Link to='/'>Home</Link> </li>
                    <li className='px-3'><Link to='/register'>Register</Link></li>
                    <li className='px-3'><Link to='/login'>Login</Link></li>
                    <li className='px-3'><Link to='/profile'>Profile</Link></li>
                    <li className='px-3'><Link to='/createQuote'>Create Quote</Link></li> 
                </ul>
            </div>
        </div>
    );
};

export default Navbar;