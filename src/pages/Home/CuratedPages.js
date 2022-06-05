import React from 'react';

const CuratedPages = () => {
    return (
        <div className='grid lg:grid-cols-4 gap-4 lg:mx-10 mt-2'>
            <div className='best-content'>
                <div className='pt-8'>
                    <h2 className='text-2xl'>Curated <span className='text-green-500 italic'>Pages</span> <br /> For You</h2>
                    <p className='mt-2 mb-2'>We have got together some of the best things from our catalogue here. Check them out.</p>
                    <button className='all-product-btn uppercase'>view all products</button>
                </div>
            </div>
            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/curated_by_2022/believe-gold-ring.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/curated_by_2022/tanvi-evil-eye-diamond-pendant-with-chain.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/curated_by_2022/inital-p-evil-eye-pendant-with-chain.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/curated_by_2022/s-a-personalised-diamond-evil-eye-kada.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/curated_by_2022/the-namesake-gold-pendant.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/curated_by_2022/clover-frame-evil-eye-diamond-earring.jpg" alt="" /></div>

            <div><img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/curated_by_2022/evil-eye-personalised-pendant-with-chain.jpg" alt="" /></div>
        </div>
    );
};

export default CuratedPages;