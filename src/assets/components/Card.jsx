import React from "react";
import './Card.css';

const Card = ({title}) => {
    
    return(
        <>
        {console.log("Card.jsx is rendering")}
        <div className="card">{title}</div>
        </>
    )
}

export default Card