import React, { Component } from 'react'
import Logo from './Logo';
import Navbar from './Navbar';
import HireMe from './HireMe';


class Index extends Component {
    render() {
        return (
            <header className="header-transparent" id="header">
                <div className="header-top fixed-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <Logo />
                            <Navbar />
                            <HireMe />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Index;


