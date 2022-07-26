import React, { Component } from 'react'
import BannerContent from './BannerContent';
import BannerImg from './BannerImg';


class Slider extends Component {
    render() {
        return (
            <section className="banner-area" id="banner">
                <div className="banner d-flex align-items-center" style={{backgroundImage: `url(assets/images/slider/slider-bg.jpg)`}} data-overlay="light" data-opacity="9">
                    <div className="container">
                        <div className="row">
                            <BannerContent/>
                            <BannerImg/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Slider;
