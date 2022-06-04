import React, { useEffect, useState } from 'react';
import './ProductCatagorys.css';

const ProductCatagorys = () => {
    const [catagorys, setCatagorys] = useState();
    useEffect(() => {
        fetch("catagorys.json")
            .then(res => res.json())
            .then(data => setCatagorys(data))
    }, [])
    return (
        <div className='catagory-container'>
            <h1 className='text-center text-2xl product-catagory'>Product Categories</h1>
            <h4 className='text-center catagory-text'>So that you don't run out of options to choose from!</h4>
            <div className='empty-div-catagory mx-auto'></div>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                {
                    catagorys?.map(product => <div className='card hover:shadow-xl mt-2'>
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