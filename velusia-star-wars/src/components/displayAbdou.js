import React from "react"
import './displayProfile.css'


const DisplayAbdou = () => {
     

    return <div className="card">
         
    <picture className="profileImage">
        <img className="profileImg" src="https://res.cloudinary.com/dzzuxhr3r/image/upload/v1555015487/hackaton/IMG_5485_1.jpg" alt="Abdou"/>
    </picture>
    
    <div className="cards-content">
	<h2 > Name : Abdou </h2>
        <p > Gender : Male </p>
        <p >Eyecolor: brown </p>
        <p > Species : human </p>
    </div>
    

</div>
}

export default DisplayAbdou