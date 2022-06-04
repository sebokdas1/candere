import React from 'react';
import './BestSeller.css';

const BestSellers = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-4 lg:mx-10 mt-2'>
            <div className='best-content'>
                <div>
                    <h2 className='text-2xl'>Discover <span className='text-green-500 italic'>Our</span> <br /> Popular Designs</h2>
                    <p className='mt-2 mb-2'>Our most loved designs deserve a worthy mention and here they are!</p>
                    <button className='all-product-btn uppercase'>view all products</button>
                </div>
            </div>
            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/best_sellers_2022/methelna-pink-pearl-diamond-earring.jpg?" alt="" /></div>
            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/best_sellers_2022/adorna-diamond-engagement-ring.jpg" alt="" /></div>
            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/best_sellers_2022/farihah-miracle-plate-diamond-necklace.jpg" alt="" /></div>
            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/best_sellers_2022/farihah-miracle-plate-diamond-earrings.jpg" alt="" /></div>
            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/best_sellers_2022/nimisha-mangalsutra-pendant.jpg" alt="" /></div>
            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/best_sellers_2022/checkered-hearts-diamond-pendant.jpg" alt="" /></div>
            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/best_sellers_2022/divine-rays-miracle-plate-diamond-bangle.jpg" alt="" /></div>
        </div>
    );
};

export default BestSellers;