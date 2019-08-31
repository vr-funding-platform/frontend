import React, {Fragment} from 'react';
import './Styles/Donor.scss';
import { Route, Link } from 'react-router-dom';



save: function save () {
    var val = this.refs.newText.value;
    alert(val)
    this.setState({
      // ** Update "text" property with new value (this fires render() again)
      text: val,
      editing: false
    })
  }

