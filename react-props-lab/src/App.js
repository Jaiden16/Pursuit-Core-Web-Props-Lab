import React from 'react';
import './App.css';
import Header from './components/header';
import DonationList from './components/donationList';
import DonationForm from './components/DonationForm';
import Progress from "./components/progress"
// import recentDonations from './components/recentDonations';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      goalAmount : 5000,
      raisedAmount : 0,
      donations: [],
      donationAmount: 0,
      donor: "",
      caption: ""
    }
  }
  
  handleSubmit =(event) =>{
    event.preventDefault()

    const {
      raisedAmount,
      donations,
      donationAmount,
      donor,
      caption} = this.state
    
      
      donations.push({
        name: donor,
        caption: caption,
        donation_amount: donationAmount
      })
      
    let newDonationsCopy = [...donations]
    
    this.setState({
      donations: newDonationsCopy,
      raisedAmount: raisedAmount + parseInt(donationAmount),
      donationAmount: 0,
      donor: "",
      caption: ""
    })
  
  }

  
  handleDonationAmount = (event) =>{
    this.setState({
      donationAmount: event.target.value
    })
  }
  
  handleDonorChange = (event) =>{
    this.setState({
      donor: event.target.value
    })
  }

  handleCaptionChange = (event) =>{
    this.setState({
        caption: event.target.value
    })
  }

  
  
  
  
  render(){
    let {goalAmount,raisedAmount,donationAmount,donor,caption,donations} = this.state
    console.log(this.state)
    return (
      <div className="App">
        <Header/>
        
        <DonationList
        donations = {donations}/>
        
        <Progress 
          amount = {raisedAmount}
          goal = {goalAmount}
        />

        <DonationForm
        handleSubmit = {this.handleSubmit}
        
        donationAmount = {donationAmount}
        handleDonationAmount = {this.handleDonationAmount}
        
        donor = {donor}
        handleDonorChange = {this.handleDonorChange}
        
        caption = {caption}
        handleCaptionChange = {this.handleCaptionChange}
        />
        {/* <recentDonations/> */}
      
      </div>
    )
  }
  
  
}

export default App;
