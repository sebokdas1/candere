import React from 'react';
import './Ring.css'

const Ring = ({ ring }) => {
    return (

        <div className='card hover:shadow-xl mt-2 cursor-pointer'>
            <div className='card-body items-center'>
                <div class="avatar">
                    <div class="w-full rounded">
                        <img src={ring.img} alt="" />
                    </div>
                </div>
                <h5 className='price'>RS.{ring.price}</h5>
            </div>
        </div>

    );
};

export default Ring;