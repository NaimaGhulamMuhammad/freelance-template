import React from 'react'
import Jobcard from '../components/JobCard'


function Jobmap(val){
    return(
        <>
        <Jobcard
            pic = {val.pic}
            name = {val.name}
            jobtitle = {val.jobtitle}
            icon ={val.icon}
            Job = {val.Job}
            jobType = {val.jobType}
            location = {val.location}
            rate = {val.rate}
            premium = {val.premium}

        />
        </>
    )
    }

export default Jobmap