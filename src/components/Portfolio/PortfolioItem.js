import React, { Component } from 'react'
//REACT-ICONS IMPORT
import { FaLink, FaPlay, FaEye } from "react-icons/fa";


class PortfolioItem extends Component {
    render() {
        //Destructuring
        const { itemName, livePreview, playBtn, projectBack } = this.props;
        // project__bg-1
        return (
            <div className="col-xl-4">
                <div className="portfolioItem text-center mb-30">
                    <div className="portfolioItem__img" style={{backgroundImage: `url(${projectBack})`}}>
                        <div className="portfolioItem__img-overlay">
                            <div className="portfolioItem__img-overlay-icon">
                                <h4>{itemName}</h4>
                                <a href={livePreview} target="_blank" rel="noreferrer">
                                    <FaEye/>
                                </a>
                                <a href={playBtn} target="_blank" rel="noreferrer">
                                    <FaPlay/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioItem__info d-flex justify-content-between align-items-center">
                        <h4>{itemName}</h4>
                        <div className="portfolioItem__info-link ">
                            <a href={livePreview} target="_blank" rel="noreferrer">
                                <FaLink/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioItem
