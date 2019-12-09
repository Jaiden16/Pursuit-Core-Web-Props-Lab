import React from "react"

const recentDonations = (props) =>{
    return(
    <li className = "list-item">
        <h3 id = "name">{props.name} dontated ${props.amount}</h3>
        <p id = "message">{props.caption}</p>
    </li>
    )
}

export default recentDonations;
