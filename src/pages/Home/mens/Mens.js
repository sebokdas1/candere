import React, { useEffect, useState } from 'react';
import Men from './Men';

const Mens = () => {
    const [ornaments, setOrnaments] = useState([]);
    useEffect(() => {
        fetch('mens.json')
            .then(res => res.json())
            .then(data => setOrnaments(data))
    }, [])
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/rs35ZSB/rings.png" alt="" />
            </div>

            <div className='ring-container'>
                <h1 className='mt-2 text-2xl'>Mens Jewellery Collection({ornaments?.length} items)</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 '>
                    {
                        ornaments.map(ornament => <Men key={ornament._id} ornament={ornament}></Men>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Mens;