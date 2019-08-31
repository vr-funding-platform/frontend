import React from "react";
import { Link } from 'react-router-dom';
import "./Styles/DonorCard.scss";

const DonorCard = (props) => {
console.log(props)
return (
    <div className="Donor-Cards">
    <h3>Project Funded: <span>{props.proj.projectName}</span></h3>
    
    <h3>Amount Funded: <span>{props.proj.fundingAmount}</span></h3>
    
    <h3>Stake: <span>53%</span> </h3>
    
    <h3>Amount Needed to Complete: <span>{props.proj.fundingGoal}</span></h3>
    
    <h3>Team:<span> Tiffany Carpenter, Aisha Raymont, Denver Johnson</span> </h3>
    
        <Link to="/projects">
            <button className="FundB">Fund Another Project!</button>
        </Link>

</div>
)
}
export default DonorCard;