import React from 'react';
import './ProductCatagorys.css';

const ProductCatagorys = () => {

    return (
        <div className='catagory-container'>
            <h1 className='text-center text-2xl product-catagory'>Product Categories</h1>
            <h4 className='text-center catagory-text'>So that you don't run out of options to choose from!</h4>
            <div className='empty-div-catagory mx-auto'></div>
            <div className='grid grid-cols-2 lg:grid-cols-4 '>
                <div className='card hover:shadow-xl mt-2 cursor-pointer'>
                    <div className='card-body items-center'>
                        <div class="avatar">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/gzT1byG/ring.png" alt="" />
                            </div>
                        </div>
                        <h5>RINGS</h5>
                    </div>
                </div>
                <div className='card hover:shadow-xl mt-2 cursor-pointer'>
                    <div className='card-body items-center'>
                        <div class="avatar">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/XWBL7Hz/earring.png" alt="" />
                            </div>
                        </div>
                        <h5>EARRINGS</h5>
                    </div>
                </div>
                <div className='card hover:shadow-xl mt-2 cursor-pointer'>
                    <div className='card-body items-center'>
                        <div class="avatar">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/zGJS7k6/pendant.png" alt="" />
                            </div>
                        </div>
                        <h5>PENDANTS</h5>
                    </div>
                </div>
                <div className='card hover:shadow-xl mt-2 cursor-pointer'>
                    <div className='card-body items-center'>
                        <div class="avatar">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/s2GQZ5Q/mangalsutra.png" alt="" />
                            </div>
                        </div>
                        <h5>MANGALSUTRAS</h5>
                    </div>
                </div>
                <div className='card hover:shadow-xl mt-2 cursor-pointer'>
                    <div className='card-body items-center'>
                        <div class="avatar">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/Ks5Yxnn/Bracelet.png" alt="" />
                            </div>
                        </div>
                        <h5>BRACELETS</h5>
                    </div>
                </div>
                <div className='card hover:shadow-xl mt-2 cursor-pointer'>
                    <div className='card-body items-center'>
                        <div class="avatar">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/fGzbpbp/necklace.png" alt="" />
                            </div>
                        </div>
                        <h5>NECKLACES</h5>
                    </div>
                </div>
                <div className='card hover:shadow-xl mt-2 cursor-pointer'>
                    <div className='card-body items-center'>
                        <div class="avatar">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/d5Kz6R1/chain.png" alt="" />
                            </div>
                        </div>
                        <h5>CHAINS</h5>
                    </div>
                </div>
                <div className='card hover:shadow-xl mt-2 cursor-pointer'>
                    <div className='card-body items-center'>
                        <div class="avatar">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/R9rrQ28/rings.png" alt="" />
                            </div>
                        </div>
                        <h5>RINGS</h5>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProductCatagorys;