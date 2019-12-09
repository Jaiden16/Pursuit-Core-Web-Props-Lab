import React from 'react'
import "./header_css.css"

class Header extends React.Component{
    
    render(){
        return (
            <div className = "header">
                <p id = "go-fund">Go Fund</p>
                <p id = "me">ME</p>
                <p id = "tag-line">Help Me Go On Vacation</p>
            </div>
        )
    }
}

export default Header;
        

    