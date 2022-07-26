import React, { Component } from 'react'
// TYPEWRITER
import Typewriter from 'typewriter-effect';

class BannerContent extends Component {

    constructor() {
        super()
        this.state = {
            myName: "Md. Sujon Ahmed",
        }
    }

    render() {
        //Distructuring
        const { myName } = this.state;
        return (
            <div className="col-xl-7">
                <div className="contentZindex">
                    <div className="banner__content">
                        <span>Hello,</span>
                        <h1>I am <span>{myName}</span></h1>
                        <h2>Professional <span>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Software Engineer",
                                        "JavaScript Developer",
                                        "Front-End-Developer",
                                        "React-Developer",
                                        "Graphics Designer",
                                        "YouTuber",
                                    ]
                                }}
                            />
                        </span>
                        </h2>
                        <div className="banner__content-btn mt-40">
                            <a href="portfolio" className="coder-btn dark-btn lg-btn mr-30">
                                <i className="fa-solid fa-border-all"></i> View Portfolio
                            </a>
                            <a href="https://www.youtube.com/watch?v=KItCFl5GgdI" className="play-btn dark-btn">
                                <i className="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default BannerContent;