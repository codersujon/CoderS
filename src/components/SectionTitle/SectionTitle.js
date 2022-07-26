import React, { Component } from 'react'

export class SectionTitle extends Component {
    render() {
        //Destructuring 
        const {SectionTitle, description } = this.props;
        
        return (
            <div className="row">
                <div className="col-12">
                    <div className="section-title text-center mb-60">
                        <h2>{SectionTitle}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTitle;
