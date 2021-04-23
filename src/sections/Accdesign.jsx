import React from 'react'
import Searchfilter from '../components/Searchfilter'
// import {Freelancedata} from '../data/Freelancedata'
import Freelancecard from '../components/Freelancecard'
import Cardmap from '../components/Cardmap'
import {Data} from '../data/client/JobsPosted'

function Accdesign (){
    return(
        <>
        <div class="Loader"></div>
        <div className="wrapper">
        <section className="accordion">
            <div className="container">
                <Searchfilter/>
                <div className='row'>
                {/* {Freelancedata.map(Cardmap)} */}
                {Data.map(Cardmap)}
                </div>
                <div className="col-md-12 col-sm-12">
							<div className="text-center">
								<a href="#" className="btn btn-primary">Load More</a>
							</div>
				</div>

            </div>


        </section>
        </div>
        </>
    )
}


export default Accdesign;