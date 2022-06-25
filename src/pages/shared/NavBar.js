import React from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li className=''><Link to="/">Home</Link></li>
        <li className=''><Link to="/rings">Rings</Link></li>
        <li className=''><Link to="/my-portfolio">Earrings</Link></li>
        <li className=''><Link to="/my-portfolio">Necklaces</Link></li>
        <li className=''><Link to="/my-portfolio">Chains</Link></li>
        <li className=''><Link to="/my-portfolio">Bangles</Link></li>
        <li className=''><Link to="/my-portfolio">Other Jewellery</Link></li>
        <li className=''><Link to="/my-portfolio">Collections</Link></li>
        <li className=''><Link to="/my-portfolio">Gifts</Link></li>
        <li className=''><Link to="/my-portfolio">Wedding</Link></li>

        <li className=''>{user ? <button className="btn btn-ghost" onClick={logOut}>Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100 shadow ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content bg-base-100 mt-3 p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case  text-xl"><img className='w-1/2 lg:w-full' src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/candere_logo/Candere_logo.svg" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;