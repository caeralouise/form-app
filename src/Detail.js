import React from "react";
import './Detail.css';

const Details = (props) =>{
    return(
        <div>
            <h2> Confirm Details</h2>
            <div className="details">
            <p>Name: {props.fname} {props.lname}</p>
            <p>Email address: {props.email}</p>
            <p>Tel No: {props.tel}</p>
            </div>
        </div>

    );
}

export default Details;