import React from 'react';
import { Link } from "react-router-dom";
// import TwoColumnCard from  '../components/TwoColumnCard'
// import {TwoColumnData} from '../data/details'

const CallToAction = () => {
    return (
       <>
       <div className="clearfix"></div>
			<section className="call-to-act">
				<div className="container-fluid">
				
					<div className="col-md-6 col-sm-6 no-padd bl-dark">
						<div className="call-to-act-caption">
							<h2>We Are Expert In Web design and development</h2>
							<h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h3>
							<Link href="#" className="btn bat-call-to-act">Hire Us</Link>
						</div>
					</div>
					
					<div className="col-md-6 col-sm-6 no-padd gr-dark">
						<div className="call-to-act-caption">
							<h2>We Are Expert In Web design and development</h2>
							<h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h3>
							<Link href="#" className="btn bat-call-to-act">Join Us</Link>
						</div>
					</div>
					
				</div>
			</section>
       </> 
    )
}

export default CallToAction