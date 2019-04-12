import React from "react"
import './DisplayMatch.css'

const DisplayMatch = () => {
    const random =  Math.floor(Math.random()*3)
    const image = ['https://s3.amazonaws.com/beatstarsdata/b.user.data/a/arcazeonthebeat-178315/gfx/cover-artwork/1487519_med_.jpg?_=1531769790','https://i.pinimg.com/236x/49/c9/2e/49c92eab14d9731d2d622ac1c8c41e1b.jpg','https://s3.amazonaws.com/s3.kluvfm.radio.com/styles/delta__775x515/s3/lightsaber.jpg?itok=iwC9CKUq']

    return (
    
    <div > 
         
        <picture >
            <img className="matchPicture" src={image[random]} alt="match"/>
        </picture>
    
    </div>
    )
}

export default DisplayMatch