import React, { Component } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import PortfolioMenu from './PortfolioMenu'
import PortfolioItem from './PortfolioItem'
import Portf from '../../data/Portfolio.json';


export class Portfolio extends Component {
    render() {
        
        let portfolioItem = [];
        
        portfolioItem = Portf.map((item, index) => <PortfolioItem key={index} itemName={item.itemName} livePreview={item.livePreview} playBtn={item.playBtn} projectBack={item.projectBack}/>);


        return (
            <section className="portfolio-area pt-120 pb-90" id="portfolio">
                <div className="container">
                    <SectionTitle   SectionTitle="portfolio" 
                                    description="Experience without theory is blind, so I have done almost 10+ projects for my local and international clients. Here is a shortlist."
                    />
                    <PortfolioMenu/>
                    <div className="row">
                        
                        {portfolioItem}

                        <div className="loadMoreService text-center pt-50">
                                <a href="services.html" className="coder-btn dark-btn big-btn">More Website</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;
