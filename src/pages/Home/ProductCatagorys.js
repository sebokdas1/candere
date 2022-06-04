import React, { useEffect, useState } from 'react';

const ProductCatagorys = () => {
    const [catagorys, setCatagorys] = useState();
    useEffect(() => {
        fetch("catagorys.json")
            .then(res => res.json())
            .then(data => setCatagorys(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-4'>
                {
                    catagorys?.map(product => <div className='card shadow-xl mt-2'>
                        <div className='card-body items-center'>
                            <div class="avatar">
                                <div class="w-full rounded">
                                    <img src={product?.img} alt="" />
                                </div>
                            </div>
                            <h5>{product?.name}</h5>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default ProductCatagorys;