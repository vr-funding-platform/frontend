import React from "react";
import DonorCard from "./DonorCard";
import ReactDOM from 'react-dom';
import {Formik, Form, Field} from "formik";
import "./Styles/DonorInfo.scss";

class DonorInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        editing: false
      };
      this.newType = "";
      this.newName = "";
      this.newEmail = "";

    }
  
    render() {
      const {name, email, type, onEdit } = this.props;

return (
<div className="Donor-Info">

    <h1>User</h1>
    {this.state.editing ? (
    <span className="type">{type} </span>
) :
    <input className="Info"
        type="text"
        onChange={this.newType}
        defaultValue={type}
        placeholder ="Donor/Creator"
        ref={node => {
        this.newType = node;
        
        }}/>
    }
    <h2>Name:</h2>
    {this.state.editing ? (
    <span className="Donor-Text">{name}</span>
    ) :
    <input className="Info"
        type="text"
        defaultValue={name}
        placeholder ="Jeff the philanthropic one"
        ref={node => {
        this.newName = node;
        }}/>
    }
    <h2>Email:</h2>
    {this.state.editing ? (
    <span className="Donor-Text">{email}</span>
    ) :
    <input className="Info"
        type="text"
        defaultValue={email}
        placeholder="jeffreyz007@yahoo.com"
        ref={node => {
        this.newEmail = node;
        }}/>
    }
    <h2>Password:</h2>
    <span className="Donor-Text">************</span>
    <div className="Buttons">
        <button className="InfoB">Edit Image</button>
           <button className="InfoB"
              onClick={() => {
                this.setState({ editing: false });
              }}
            >
              Edit Profile
            </button>
            <button className="InfoB"
              onClick={() => {
                this.setState({ editing: true });
              }}
            >
              Save Profile
            </button>
    </div>
</div>
)
    }
}

export default DonorInfo;
