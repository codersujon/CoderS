import React, { Component } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import AboutMenu from './AboutMenu';
import AboutImg from './AboutImg';
import AboutContent from './AboutContent'

	
export class Index extends Component {
	render() {
			return (
					<section className="about-area pt-120 pb-90" id="about">
						<div className="about__Me" id="about__Me">
							<div className="container">
								<SectionTitle SectionTitle="about me" />
								<AboutMenu/>
								<div className="about">
									<div className="row align-items-center">
										<AboutImg/>
										<AboutContent/>
									</div>
								</div>
							</div>
						</div>
					</section> 
				)
			}
}
			
export default Index