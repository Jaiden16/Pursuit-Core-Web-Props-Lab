import React from "react"
import RecentDonations from "./recentDonations"

const DonationList = (props)=> {
    
    const donations = props.donations.map( donationObj =>{
        return(<RecentDonations 
            name ={donationObj.name}
            caption ={donationObj.caption}
            amount ={donationObj.donation_amount}
        />)
    })
    
    return(
    <div className = "Donation-List">
        <h3>Recent Donations</h3>
        <ul>{donations}</ul>
    </div>
    )
}

export default DonationList;