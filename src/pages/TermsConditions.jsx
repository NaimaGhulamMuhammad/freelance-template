import React from 'react'
import Navbar from '../components/Navbar'
import bgImg from "../img/banner-10.jpg"
import TermsConditionsDiv from '../components/TermsConditionsDiv'
import Banner from '../components/Banner'
 

const TermsConditions = () => {
    return (
        <>
        <div class="Loader"></div>
		<div class="wrapper">
        
        
        <Banner title = "Terms & Conditions " bgImg={bgImg}/>
        <TermsConditionsDiv/>
        </div>
        </>
    )
}

export default TermsConditions