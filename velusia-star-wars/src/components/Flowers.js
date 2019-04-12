import React from "react";

import './Flowers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faPinterest, faYoutube, faTwitter, faGooglePlus, faInstagram} from "@fortawesome/free-brands-svg-icons";


class Flowers extends React.Component{
    render(){
        return(
            <div>
               <nav class="menu">
                    <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
                    <label className="menu-open-button" for="menu-open">
                        <span className="lines line-1"></span>
                        <span className="lines line-2"></span>
                        <span className="lines line-3"></span>
                    </label>

                    <a href="#" className="menu-item blue"> <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                    <a href="#" className="menu-item green"> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                    <a href="#" className="menu-item red"> <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon></a>
                    <a href="#" className="menu-item purple"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </a>
                    <a href="#" className="menu-item orange"> <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon> </a>
                    <a href="#" className="menu-item lightblue"> <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> </a>
                </nav>
            </div>
        )
    }
}

export default Flowers