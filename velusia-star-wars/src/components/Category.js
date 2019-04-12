import React from 'react';
import "./Category.css"


const Category = props => (
 <div className="Frame">
	<form onSubmit={props.getProfile}>
		<button className="button">Recherche</button>
	</form>
</div>
);


export default Category
