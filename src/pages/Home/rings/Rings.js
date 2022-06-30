import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Ring from './Ring';
import './Rings.css'

const Rings = () => {
    const [rings, setRings] = useState([]);
    useEffect(() => {
        fetch('ring.json')
            .then(res => res.json())
            .then(data => setRings(data))
    }, [])
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/rs35ZSB/rings.png" alt="" />
            </div>

            <div className='ring-container'>
                <h1 className='mt-2 text-2xl'>Rings({rings?.length} items)</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 '>
                    {
                        rings.map(ring => <Ring key={ring._id} ring={ring}></Ring>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Rings;