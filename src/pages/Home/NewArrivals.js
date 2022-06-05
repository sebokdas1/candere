import React from 'react';

const NewArrivals = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-4 lg:mx-10 mt-2'>
            <div className='best-content'>
                <div className='pt-8'>
                    <h2 className='text-2xl'>New <span className='text-green-500 italic'>Arrivals</span> <br /> This Month</h2>
                    <p className='mt-2 mb-2'>Take a glance at the fresh designs that have been added to our stock recently!</p>
                    <button className='all-product-btn uppercase'>view all products</button>
                </div>
            </div>
            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/new_arrivals_2022/honeycomb-diamond-pendant.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/new_arrivals_2022/manava-diamond-bangle.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/new_arrivals_2022/leafy-trail-diamond-earrings.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/new_arrivals_2022/calista-diamond-bracelet.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/new_arrivals_2022/anura-diamond-ring.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/new_arrivals_2022/adah-diamond-necklace.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/new_arrivals_2022/fia-diamond-ring.jpg" alt="" /></div>
        </div>
    );
};

export default NewArrivals;