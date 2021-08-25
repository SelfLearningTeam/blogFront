import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div className='w-full h-14 bg-indigo-300 '>
        <Link to='/' className=''>Home</Link>
        <Link to='/login' className=''>Login</Link>

    </div>
    )
}

export default Navbar;