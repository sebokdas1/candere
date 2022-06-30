import React, { useEffect, useState } from 'react';
import Earring from './Earring';
import './Earrings.css'

const Earrings = () => {
    const [earrings, setEarrings] = useState([]);
    useEffect(() => {
        fetch('earring.json')
            .then(res => res.json())
            .then(data => setEarrings(data))
    }, [])
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/RNsBmrB/LP-Diamond-Earring.png" alt="" />
            </div>

            <div className='ring-container'>
                <h1 className='mt-2 text-2xl'>Earrings({earrings?.length} items)</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 '>
                    {
                        earrings.map(earing => <Earring key={earing._id} ring={earing}></Earring>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Earrings;