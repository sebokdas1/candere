import React from 'react';

const Men = ({ ornament }) => {
    return (
        <div className='card hover:shadow-xl mt-2 cursor-pointer'>
            <div className='card-body items-center'>
                <div class="avatar">
                    <div class="w-full rounded">
                        <img src={ornament?.img} alt="" />
                    </div>
                </div>
                <h5 className='price'>RS.{ornament?.price}</h5>
            </div>
        </div>
    );
};

export default Men;