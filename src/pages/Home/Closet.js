import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Closet.css';

const Closet = () => {
    return (
        <div className='closet-container'>
            <h1 className='text-center text-2xl closet-catagory'>Closet Must-Haves</h1>
            <h4 className='text-center closet-text'>Your one-stop-solution to jewellery shopping and gifting round the year!</h4>
            <div className='empty-div-closet mx-auto'></div>
            <div className='mt-5'>
                <ul className='nested-links'>
                    <li className='btn btn-ghost'> <Link to="/">Bestsellers</Link></li>
                    <li className='btn btn-ghost'><Link to="/arrivals">New Arrivals</Link></li>
                    <li className='btn btn-ghost'><Link to="/curated">Curated Pages</Link></li>

                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Closet;