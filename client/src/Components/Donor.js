import React, {Fragment} from 'react';
import './Styles/Donor.scss';
import { Route, Link } from 'react-router-dom';
import DonorCard from "./DonorCard";
import DonorInfo from "./DonorEdit";

const Donor = props => {
    const type = "Donor"
    const name = "Jeff the philanthropic one";
    const email ="jeffreyz007@yahoo.com";
    
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
        <DonorInfo/>
       
    </div>
    
       {props.projects.map(proj => (
           <DonorCard proj={proj} key={proj.id}/>
       )
        )}

    </Fragment>
)
}

export default Donor;

