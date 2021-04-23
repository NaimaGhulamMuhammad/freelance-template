import React from 'react'
import Freelancecard from '../components/Freelancecard'
function Cardmap(val){
    return(
        <>
        <Freelancecard
        time = {val.time}
        rate = {val.rate}
        name = {val.name}
        description = {val.description}
        skills = {val.skills}
        jobtitle ={val.jobtitle}
        // class1 = {val.class1}
        />

        </>
    )
}

export default Cardmap;