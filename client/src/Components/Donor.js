import React, {Fragment} from 'react';
import './Styles/Donor.scss';

const DonorCard = props => {
    
return (

    <Fragment>
    <div className="Donor-Container">
        <div className="img-wrapper">
            <img
            src="https://i.imgur.com/j8xvz88.jpg"
            alt="user-icon"
            className="user-icon"
            />
        </div>
        <div className="Donor-Info">
            <h1>Donor</h1>
            <h2>Name:</h2>
            <span className="Donor-Text">Jeff the philanthropic one</span>
            <h2>Email:</h2>
            <span className="Donor-Text">jeffreyz007@yahoo.com</span>
            <h2>Password:</h2>
            <span className="Donor-Text">**************</span>
            <div className="Buttons">
                <button className="InfoB">Edit Image</button>
                <button className="InfoB">Edit Profile Details</button>
            </div>
        </div>
    </div>
    <div className="Donor-Cards">
            <h3>Project Funded:{props.projectName}</h3>
            
            <h3>Amount Funded:{props.fundingAmount}</h3>
            
            <h3>Stake:</h3>
            
            <h3>Amount Needed to Complete:{props.fundingGoal}</h3>
            
            <h3>Team:</h3>
            
            <button className="FundB">Fund Another Project!</button>
    </div>
    </Fragment>
)
}

export default DonorCard;
