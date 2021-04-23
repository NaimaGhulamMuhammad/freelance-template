import React from 'react'

function Searchfilter(){
    return(
        <>
                <div className="row extra-mrg">
						<div className="wrap-search-filter">
							<form>
								<div className="col-md-3 col-sm-3">
									<input type="text" className="form-control" placeholder="Anywhere..."/>
								</div>
								<div className="col-md-3 col-sm-3">
									<input type="text" className="form-control" placeholder="Keyword. Design, Seo.."/>
								</div>
								<div className="col-md-3 col-sm-3">
									<select className="selectpicker form-control" multiple title="All Categories">
										<option>Admin Support</option>
										<option>Customer Service</option>
										<option>Data Analytics</option>
										<option>Design & Creative</option>
										<option>Software Developing</option>
										<option>IT & Networking</option>
										<option>Content Writer</option>
										<option>Sales & Marketing</option>
									</select>

								</div>
								<div className="col-md-3 col-sm-3">
									<button type="submit" className="btn btn-primary full-width">Filter</button>
								</div>
							</form>
						</div>
					</div>



        </>
    )
}

export default Searchfilter;