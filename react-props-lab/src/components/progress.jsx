import React from "react"

function Progress(props){
    return(
        <div className ="progress">
            <h1>Raised ${props.amount} of ${props.goal}</h1>
            
        </div>

    )
}

export default Progress