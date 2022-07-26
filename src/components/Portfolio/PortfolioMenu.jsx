import React from 'react'

const PortfolioMenu = () => {
    return(
        <div className="row">
            <div className="portfolio-menu text-center mb-80" >
                <button type="button" className="active" data-filter="all">All</button>
                <button type="button" data-filter=".lPage">Landing Page</button>
                <button type="button" data-filter=".mPage">Multiple Page</button>
                <button type="button" data-filter=".eTempt">Email Template</button>
                <button type="button" data-filter=".category-c">WooCommerce</button>
                <button type="button" data-filter=".category-c">UI & UX Design</button>
            </div>
        </div>
    )
}

export default PortfolioMenu;

