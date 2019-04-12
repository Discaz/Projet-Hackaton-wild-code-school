import React from 'react';
import "./Category.css"

const Category = ({Gender, Species, Eyes}) => {
    return (
        <div className="Frame">
        <div className="Categories">
        <input type="text" placeholder={Gender}/>
        <input type="text" placeholder={Species}/>
        <input type="text" placeholder={Eyes}/>
        </div>
        <div className="Button">
        <div className="button">Recherche</div>
        </div>
        </div>
    )
}

export default Category
