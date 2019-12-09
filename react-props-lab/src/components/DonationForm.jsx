import React from 'react'
import "./DonationForm.css"
// import recentDonations from "./recentDonations"

const DonationForm = (props)=>{
      
     
        return(
             <div className = "Donation-Form">
                
                 
                <form onSubmit = {props.handleSubmit}>
                    
                    <div className = "donor">
                        <label htmlFor = "donor-input">Name</label><br/>
                        <input 
                        id = "donor-input" 
                        type = "text" 
                        placeholder = "write name here"
                        value = {props.donor}
                        onChange = {props.handleDonorChange}/>
                    </div>
                    
                    <div className = "caption">
                        <label htmlFor = "caption-input">Caption</label><br/>
                        <input 
                        id = "caption-input" 
                        type = "text" 
                        placeholder = "- - -"
                        value = {props.caption}
                        onChange = {props.handleCaptionChange}
                        />
                    </div>

                    <div className = "donation-amount">
                        <p>Amount to donate</p>
                        <input id = "amount"
                        name = "amount"
                        type = "range"
                        min = "0"
                        max = "1000"
                        value = {props.donationAmount}
                        onChange = {props.handleDonationAmount}/>
                        <p id = "money">${props.donationAmount}</p>
                        <button id = "form-button">Donated</button>
                    </div>
                
                </form>
            </div>
        )
    
}


export default DonationForm;