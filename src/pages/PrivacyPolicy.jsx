import React from 'react'
import bgImg from "../img/banner-10.jpg"
import Banner from '../components/Banner'
import PrivacyPolicyDiv from '../components/PrivacyPolicyDiv'

const PrivacyPolicy = () => {
    return (
        <>
        <div class="Loader"></div>
		<div class="wrapper">
        
        
        <Banner title = "Privacy Policy " bgImg={bgImg}/>
        <PrivacyPolicyDiv/>
        </div>
        </>
    )
}

export default PrivacyPolicy