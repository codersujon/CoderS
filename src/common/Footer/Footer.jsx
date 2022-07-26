import React, { Component } from 'react'

export class Index extends Component {

    constructor(){
        super()
        this.state = {
            siteName: "CoderSujon.com",
            myName: "Md. Sujon Ahmed" 
        }
    };

    render() {
        //FOR LATEST YEAR
        const date = new Date();
        const currentYear = date.getFullYear();
        const {siteName, myName } = this.state;
        return (
            <footer className="footer-area pt-10 pb-10 secondary-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer">
                                    <p>Copyright &copy; 2020-{currentYear} <a href="https://www.codersujon.com/">{siteName}</a>, All right reserved. <br/> Designed by <span>{myName}</span></p>
                            </div>
                        </div>
                    </div>  
                </div>
            </footer>
        )
    }
}
export default Index
