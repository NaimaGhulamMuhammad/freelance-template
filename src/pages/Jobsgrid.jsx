import React from 'react'
import Banner from '../components/Banner'
import Img from '../img/banner-10.jpg'
import Compsearch from '../components/Companysearch'
// import {JobsData} from '../data/JobData'
import {Data} from '../data/company/JobPosted'
import Jobmap from '../components/Jobmap'




function Jobgrid(){
    return(
        <>
        <Banner
        title = "Browse Job"
        bgImg = {Img}
        />
		<div className="clearfix"></div>
        <section className="brows-job-category">
			<div className="container">
                <Compsearch/>
                <div className="row extra-mrg">
                {/* {JobsData.map(Jobmap)} */}
                {Data.map(Jobmap)}
                </div>
                <div class="row">
						<ul className="pagination">
							<li><a href="#">&laquo;</a></li>
							<li className="active"><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li> 
							<li><a href="#">4</a></li> 
							<li><a href="#"><i class="fa fa-ellipsis-h"></i></a></li> 
							<li><a href="#">&raquo;</a></li> 
						</ul>
				</div>


                
            </div>


        </section>
        </>
    )
}

export default Jobgrid