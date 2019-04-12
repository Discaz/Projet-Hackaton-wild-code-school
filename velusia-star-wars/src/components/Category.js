import React from 'react';
import "./Category.css"

const Category = ({Gender, Species, Eyes}) => {
    return (
        <div className="Frame">
        <div className="Categories">
        <input type="" placeholder={Gender}></input>
        <input type="" placeholder={Species}></input>
        <input type="" placeholder={Eyes}></input>
        </div>
        <div className="Button">
        <div className="button">Recherche</div>
        </div>
        </div>
    )
}

export default Category
