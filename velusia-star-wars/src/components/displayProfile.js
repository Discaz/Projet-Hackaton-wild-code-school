import React from "react"



const DisplayProfile = ({profile}) => {
    return <div className="">
                    
    <picture>
        <img className="profileImg" src={profile[1].image} alt=""/>
    </picture>
    
    <div className="">
	<h2 className=""> Name : {profile[1].name} </h2>
        <p className=""> Gender :  </p>
        <p className="">Eyecolor: {profile[1].eyeColor}</p>
        <p> Species : {profile[1].species} </p>
    </div>
    

</div>
}

export default DisplayProfile