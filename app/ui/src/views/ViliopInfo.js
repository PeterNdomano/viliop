import React, { Component } from 'react';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
import logo from '../assets/logo.png';
const path = window.require('path');
const fs = window.require('fs');


export default class ViliopInfo extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="ViliopInfo">
        <div className="text-center">
          <img src={logo}/>
        </div>
        <div className="text-left" style={{ padding:"17px" }}>
          <h6 className="text-muted font-light">An Integrated Pentesting Environment Based On OWASP Testing Guides</h6>
          <small className="text-muted form-text">v 0.0.1</small>
        </div>
        <div className="text-right" style={{ padding:"10px", marginTop:"20px" }}>
          <hr/>
          <small className="text-muted form-text">https://peterndomano.dev/viliop</small>
          <small className="text-muted form-text">viliop@peterndomano.dev</small>
          <small className="text-muted form-text">&copy;PeterNdomano 2022</small>
        </div>
      </div>
    )
  }
}
