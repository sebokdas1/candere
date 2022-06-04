import React from 'react';
import './Gifts&More.css';

const GiftsAndMore = () => {
    return (
        <div className='gifts-container'>
            <h1 className='text-center text-2xl gifts-catagory'>Gifts & More</h1>
            <h4 className='text-center gifts-text'>So that you don't run out of options to choose from!</h4>
            <div className='empty-div-gifts mx-auto'></div>
            <div className=''>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-40 mt-8'>
                    <div className='card lg:w-96 hover:shadow mt-2'>
                        <div className=' items-center'>
                            <div class="">
                                <div class="w-full rounded">
                                    <img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/new_homepage_2020/gifts/gift_collection.webp" alt="" />
                                </div>
                            </div>
                            <button className='uppercase gift-btn'>gifts for him</button>
                        </div>
                    </div>

                    <div className='card lg:w-96 hover:shadow mt-2'>
                        <div className=' items-center'>
                            <div class="">
                                <div class="w-full rounded">
                                    <img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/kids_slider/gifts_for_kids.webp" alt="" />
                                </div>
                            </div>
                            <button className='uppercase gift-btn'>Gifts for kids</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftsAndMore;