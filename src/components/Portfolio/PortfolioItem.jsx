import React, { Component } from 'react'


class PortfolioItem extends Component {
    render() {
        const { itemName, livePreview, playBtn, projectBack } = this.props;
        return (
            <div className="col-xl-4">
                <div className="portfolioItem text-center mb-30">
                    <div className="portfolioItem__img" style={{ backgroundImage: `url(${projectBack})` }}>
                        <div className="portfolioItem__img-overlay">
                            <div className="portfolioItem__img-overlay-icon">
                                <h4>{itemName}</h4>
                                <a href={livePreview} target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-eye"></i>
                                </a>
                                <a href={playBtn} target="_blank" rel="noreferrer">
                                    <i className="fa-solid fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="portfolioItem__info d-flex justify-content-between align-items-center">
                        <h4>{itemName}</h4>
                        <div className="portfolioItem__info-link ">
                            <a href={livePreview} target="_blank" rel="noreferrer">
                                <i className="fa-solid fa-link"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioItem
