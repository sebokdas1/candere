import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedCollection.css'

const FeaturedCollection = () => {
    const navigate = useNavigate()
    const handleMen = () => {
        navigate('/mens')
    }
    return (
        <div className='featured-container'>
            <h1 className='text-center text-2xl featured-catagory'>Featured Categories</h1>
            <h4 className='text-center featured-text'>Let's take a glimpse of our trending collections before diving in!</h4>
            <div className='empty-div-featured mx-auto'></div>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-10 mt-8 featured'>
                <div onClick={handleMen} className='card lg:w-96 hover:shadow-xl mt-2 cursor-pointer'>
                    <div className=' items-center'>
                        <div class="">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/Y053B1z/mens-jewellery.png" alt="" />
                            </div>
                        </div>
                        <h5 className='mt-2'>Men's Collection</h5>
                        <small className=''>For The Men Of Class</small>
                    </div>
                </div>

                <div className='card lg:w-96 hover:shadow-xl mt-2 cursor-pointer'>
                    <div className=' items-center'>
                        <div class="">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/2cgZgmX/Sunkissed.png" alt="" />
                            </div>
                        </div>
                        <h5 className='mt-2'>Sunkissed Collection</h5>
                        <small className=''>A Hint Of Love & Shine</small>
                    </div>
                </div>

                <div className='card lg:w-96 hover:shadow-xl mt-2 cursor-pointer'>
                    <div className=' items-center'>
                        <div class="">
                            <div class="w-full rounded">
                                <img src="https://i.ibb.co/ZBP0YwT/Aadya.png" alt="" />
                            </div>
                        </div>
                        <h5 className='mt-2'>Aadya Collection</h5>
                        <small className=''>As Unique As You</small>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FeaturedCollection;