import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Donor.scss';

function UserCard (){
return (
    <div className="Card-Container">
        <div className="img-wrapper">
            <img
            src="https://i.imgur.com/j8xvz88.jpg"
            alt="user-icon"
            className="user-icon"
            />
        </div>
        <div className="Card-Info">
            <h1>Donor</h1>
            <h2>Name:</h2>
            <span className="Card-Text">Jeff the philanthropic one</span>
            <h2>Email:</h2>
            <span className="Card-Text">jeffreyz007@yahoo.com</span>
            <h2>Password:</h2>
            <span className="Card-Text">**************</span>
            <div className="Buttons">
                <button className="InfoB">Edit Image</button>
                <button className="InfoB">Edit Profile Details</button>
            </div>
        </div>
        
    </div>
    
)
}

export default UserCard;
