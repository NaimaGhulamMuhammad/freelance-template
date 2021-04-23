import React from 'react'
import {Data} from '../data/client/JobsPosted'
 

function Freelancecard({time, rate, name, jobtitle, skills, description}){
	const orange = "popular-jobs-status bg-warning"
	const green = "popular-jobs-status bg-success"
	const blue = "popular-jobs-status bg-info"
	const red = "popular-jobs-status bg-danger"
	var setClr; 
	if(time==="Monthly") setClr = orange
    else if(time === "Hourly") setClr = green
    else if(time === "Weekly") setClr = blue
    else setClr = red
    return(
        <>
        
        <div className="col-md-4 col-sm-6">
							<div className="popular-jobs-container">
								<div className="popular-jobs-box">
									<span className={setClr}>{time}</span>
									<h4 className="flc-rate">{rate}</h4>
									<div className="popular-jobs-box">
										<div className="popular-jobs-box-detail">
											<h4>{name}</h4>
											<span className="desination">{jobtitle}</span>
										</div>
									</div>
									<div className="popular-jobs-box-extra">
										<ul>

											    	{skills.map(val => {
																return(
														<li key={val}>{val}</li>);
													})}
											<li className="more-skill bg-primary">+3</li>
										</ul>
										<p>{description}</p>
									</div>
								</div>
								<a href="#" className="btn btn-popular-jobs bt-1">View Detail</a>
							</div>
						</div>

        
        </>
    )
}

export default Freelancecard;