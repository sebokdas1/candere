import React from 'react';
import './FeaturedCollection.css'

const FeaturedCollection = () => {
    return (
        <div className='featured-container'>
            <h1 className='text-center text-2xl featured-catagory'>Featured Categories</h1>
            <h4 className='text-center featured-text'>Let's take a glimpse of our trending collections before diving in!</h4>
            <div className='empty-div-featured mx-auto'></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-10 mt-8'>
                <div className='card lg:w-96 hover:shadow-xl mt-2'>
                    <div className=' items-center'>
                        <div class="">
                            <div class="w-full rounded">
                                <img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/collections_2022/sunkissed-Collection.webp" alt="" />
                            </div>
                        </div>
                        <h5 className='mt-2'>Sunkissed Collection</h5>
                        <small>A Hint of Love & Shine</small>
                    </div>
                </div>

                <div className='card lg:w-96 hover:shadow-xl mt-2'>
                    <div className=' items-center'>
                        <div class="">
                            <div class="w-full rounded">
                                <img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/collections_2022/miracle.webp?v=1648722602" alt="" />
                            </div>
                        </div>
                        <h5 className='mt-2'>Miracle Plate Collection</h5>
                        <small>Seeing Is Believing</small>
                    </div>
                </div>

                <div className='card lg:w-96 hover:shadow-xl mt-2'>
                    <div className=' items-center'>
                        <div class="">
                            <div class="w-full rounded">
                                <img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/collections_2022/ziva-collection.webp?v=1648722602" alt="" />
                            </div>
                        </div>
                        <h5 className='mt-2'>Ziva Collection</h5>
                        <small>Celebrate your inner glow!</small>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FeaturedCollection;