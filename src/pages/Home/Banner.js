import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='mt-2'>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://cfcdn20.candere.com/media/custom/banners/File-1653555389.jpg" class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle"> <span className='arrow'>❮</span> </a>
                        <a href="#slide2" class="btn btn-circle"> <span className='arrow'>❯</span> </a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://cfcdn20.candere.com/media/custom/banners/File-1654253696.gif" class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle"> <span className='arrow'>❮</span> </a>
                        <a href="#slide3" class="btn btn-circle"> <span className='arrow'>❯</span> </a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://cfcdn20.candere.com/media/custom/banners/File-1654081975.jpg" class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle"> <span className='arrow'>❮</span> </a>
                        <a href="#slide4" class="btn btn-circle"> <span className='arrow'>❯</span> </a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://cfcdn20.candere.com/media/custom/banners/File-1654082182.jpg" class="w-full" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle"> <span className='arrow'>❮</span> </a>
                        <a href="#slide1" class="btn btn-circle"> <span className='arrow'>❯</span> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;