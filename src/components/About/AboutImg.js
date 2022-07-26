import React, { Component } from 'react'
//IAMGE IMPORT
import aboutMe from '../../assets/images/about/about__Me.jpg'

export class AboutImg extends Component {
    render() {
        return (
            <div className="col-xl-6">
                <div className="about__img mb-30">
                    <img src={aboutMe} alt="About Me" className="rounded"/>
                </div>									
			</div>
        )
    }
}

export default AboutImg
