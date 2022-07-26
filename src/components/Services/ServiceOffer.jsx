import React, { Component } from 'react'

class ServiceOffer extends Component {

    render() {
        const { no, serviceImg, serviceTitle, serviceContent } = this.props;
        return (
            <div className="col-xl-4">
                <div className="serviceOffer bg-white mb-30">
                    <div className="serviceOffer__content text-center">
                        <span>{no}</span>
                        <div className="serviceOffer__content-icon">
                            <img src={serviceImg} alt="Devices-icon" />
                        </div>
                        <h3>{serviceTitle}</h3>
                        <p>{serviceContent}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceOffer
