import React from 'react'
//IMAGE IMPORT
import sliderMeImg from '../../assets/images/slider/slider-me.png';

function BannerImg() {
    return (
            <div className="col-xl-5">
                <div className="contentZindex">
                    <div className="banner__img f-right">
                        <img src={sliderMeImg} alt="Slider-Me" />
                    </div>
                </div>    
            </div>
    )
}

export default BannerImg;
