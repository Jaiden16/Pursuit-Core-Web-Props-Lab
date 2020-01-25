import React,{useState} from 'react';
import './App.css';
import Header from './components/header';
import DonationList from './components/donationList';
import DonationForm from './components/DonationForm';
import Progress from "./components/progress"
// import recentDonations from './components/recentDonations';

const App = () =>{
    const [goalAmount, setGoalAmount] = useState(5000);
    const [raisedAmount, setRaisedAmount] = useState(0);
    const [donations,setDonations] = useState([]);
    const [donationAmount, setDonationAmount] = useState(0);
    const [donor, setDonor] = useState("");
    const [caption, setCaption] = useState("")
  
  
  const handleSubmit =(event) =>{
    event.preventDefault()

      
      donations.push({
        name: donor,
        caption: caption,
        donation_amount: donationAmount
      })
      
    let newDonationsCopy = [...donations]
    
    setDonations(newDonationsCopy);
    setRaisedAmount(raisedAmount + parseInt(donationAmount))
    setDonationAmount(0)
    setDonor("")
    setCaption("")
    
    // this.setState({
    //   donations: newDonationsCopy,
    //   raisedAmount: raisedAmount + parseInt(donationAmount),
    //   donationAmount: 0,
    //   donor: "",
    //   caption: ""
    // })
  
  }

  
  const handleDonationAmount = (event) =>{
    setDonationAmount(event.target.value)
    
  }
  
  const handleDonorChange = (event) =>{
    setDonor(event.target.value)
    
  }

  const handleCaptionChange = (event) =>{
    setCaption(event.target.value)

    
  }

  
  
  
  
  // render(){
    // let {goalAmount,raisedAmount,donationAmount,donor,caption,donations} = this.state
    // console.log(this.state)
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
        handleSubmit = {handleSubmit}
        
        donationAmount = {donationAmount}
        handleDonationAmount = {handleDonationAmount}
        
        donor = {donor}
        handleDonorChange = {handleDonorChange}
        
        caption = {caption}
        handleCaptionChange = {handleCaptionChange}
        />
        {/* <recentDonations/> */}
      
      </div>
    )
  // }
  
  
}

export default App;
