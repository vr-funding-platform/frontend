import React, { Fragment } from 'react';
import './Styles/DonorInfo.scss';

class DonorInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: true
    };
    this.newType = '';
    this.newName = '';
    this.newEmail = '';
  }

  render() {
    const { name, email, type } = this.props;

    return (
      <Fragment>
        <div className="Donor-Info">
          <h1>
            User: <input {...this.newType} />
          </h1>

          {this.state.editing ? (
            <span className="type">{type} </span>
          ) : (
            <input
              className="Info"
              type="text"
              onChange={this.newType}
              defaultValue={type}
              placeholder="Donor/Creator"
              ref={node => {
                this.newType = node;
              }}
            />
          )}
          <h2>
            Name: <input {...this.newName} />
          </h2>
          {this.state.editing ? (
            <span className="Donor-Text">{name}</span>
          ) : (
            <input
              className="Info"
              type="text"
              defaultValue={name}
              placeholder="Jeff the philanthropic one"
              ref={node => {
                this.newName = node;
              }}
            />
          )}
          <h2>
            Email: <input {...this.newEmail} />
          </h2>
          {this.state.editing ? (
            <span className="Donor-Text">{email}</span>
          ) : (
            <input
              className="Info"
              type="text"
              defaultValue={email}
              placeholder="jeffreyz007@yahoo.com"
              ref={node => {
                this.newEmail = node;
              }}
            />
          )}
          <h2>Password:</h2>
          <span className="Donor-Text">************</span>
          <div className="Buttons">
            <button className="InfoB">Edit Image</button>
            <button
              className="InfoB"
              onClick={() => {
                this.setState({ editing: false });
              }}
            >
              Edit Profile
            </button>
            <button
              className="InfoB"
              onClick={() => {
                this.setState({
                  editing: true
                });
              }}
            >
              Save Profile
            </button>
          </div>
        </div>
        }
      </Fragment>
    );
  }
}

export default DonorInfo;
