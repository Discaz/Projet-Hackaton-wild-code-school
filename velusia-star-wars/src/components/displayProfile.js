import React from "react"



const DisplayProfile = (props) => {
    return <div className="">
                    
    <picture>
        <img className="profileImg" src="https://vignette.wikia.nocookie.net/starwars/images/b/b7/MP-MonMothma.png" alt=""/>
    </picture>
    
    <div className="">
	<h2 className=""> Name : Mon Mothma </h2>
        <p className=""> Gender : female </p>
        <p className="">Eyecolor: pale blue-green</p>
        <p> Species : human </p>
    </div>
    

</div>
}

export default DisplayProfile