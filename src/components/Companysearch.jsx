import React from 'react'

function Compsearch(){
    return(
        <>
            			<div className="row extra-mrg">
						<div className="wrap-search-filter">
							<form>
								<div className="col-md-4 col-sm-4">
									<input type="text" className="form-control" placeholder="Keyword: Name, Tag"/>
								</div>
								<div className="col-md-3 col-sm-3">
									<input type="text" className="form-control" placeholder="Location: City, State, Zip"/>
								</div>
								<div className="col-md-3 col-sm-3">
									<select className="selectpicker form-control" multiple title="All Categories">
									  <option>Information Technology</option>
									  <option>Mechanical</option>
									  <option>Hardware</option>
									</select>

								</div>
								<div className="col-md-2 col-sm-2">
									<button type="submit" className="btn btn-success full-width">Filter</button>
								</div>
							</form>
						</div>
					</div>					

        </>
    )
}

export default Compsearch