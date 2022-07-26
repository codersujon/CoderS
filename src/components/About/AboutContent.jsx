import React, { Component } from 'react';
//REACT-ICONS IMPORT
import { FaSmile, FaCloudDownloadAlt } from "react-icons/fa";

class AboutContent extends Component {

    constructor(){
        super()

        this.state = {
            aboutContent: {
                name: "Md. Sujon Ahmed",
                profession: "Software Engineer",
                description: "Hi! I'm Md.Sujon Ahmed, JavaScript Developer from Dhaka, Bangladesh. I'have been completed my B.Sc Hon's in CSE from Institute of Science Trade & Technology (ISTT). Basically, I like to spend my time engaging in creative activities, venturing various categories. I solved thousand+ basic to medium level programming problems in C/C++. After leaving the competitive programming arena, I decided to shift my gear and charged into the world of database, web designing and development. I have learnt tons of things from completing 60+ follow along projects. Now, I have quite a good grasp in HTML, CSS, SASS, Bootstrap, JavaScript, jQuery, React JS, PHP, MYSQL, Git, and so on. I am still a newbie learning new stuffs everyday and enhancing my skills. That’s all about me. Please take your time to look around."
            },
            personalInfo: {
                dob: "29 November 1996",
                age: "24 years 7 months",
                email: "info@codersujon.com",
                phone: "+880 019 70 36 64 46",
                city: "Dhaka, Bangladesh",
                freelance: "Available"
            }
        }
    }

    render() {
        //Destructuring
        const { name, profession, description } = this.state.aboutContent;
        const { dob, age, email, phone, city, freelance } = this.state.personalInfo;
                
        return (
            <div className="col-xl-6">
                <div className="about__content mb-40">
                    <h2>Hi, I am <span>{name}</span></h2>
                    <h3>Creative <span>{profession}</span></h3>
                    <hr />
                    <p>{description}</p>
                    <div className="about__content-personalInfo mb-60">
                        <div className="info-item">
                            <p><span>Birthday</span> : {dob}</p>
                        </div>
                        <div className="info-item">
                            <p><span>Age</span> : {age}</p>
                        </div>
                        <div className="info-item">
                            <p><span>Email</span> : {email}</p>
                        </div>
                        <div className="info-item">
                            <p> <span>Phone</span> : {phone}</p>
                        </div>
                        <div className="info-item">
                            <p> <span>City</span> : {city}</p>
                        </div>  
                        <div className="info-item">
                            <p><span>Freelance</span> : {freelance}</p>
                        </div>
                    </div>
                    <div className="about__content-btn">
                        <a href="#download" className="coder-btn dark-btn lg-btn mr-30">
                            <FaCloudDownloadAlt/> Download CV
                        </a>
                        <a href="https://www.fiverr.com/sujon_world" className="coder-btn dark-btn lg-btn"> 
                            <FaSmile/> Hire Me 
                        </a>
                    </div>
                </div>									
			</div>
        )
    }
}

export default AboutContent
