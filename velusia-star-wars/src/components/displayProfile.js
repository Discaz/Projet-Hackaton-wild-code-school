import React from "react"
import './displayProfile.css'



const DisplayProfile = ({profile}) => {
    const random =  Math.floor(Math.random()*profile.length) 

    return <div className="card">
         
    <picture>
        <img className="profileImg" src={profile[random].image} alt=""/>
    </picture>
    
    <div className="card-content">
	<h2 className=""> Name : {profile[random].name} </h2>
        <p className=""> Gender : {profile[random].gender} </p>
        <p className="">Eyecolor: {profile[random].eyeColor}</p>
        <p> Species : {profile[random].species} </p>
    </div>
    

</div>
}

export default DisplayProfile