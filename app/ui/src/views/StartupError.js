import React, { Component } from 'react';
import ViliopInfo from './ViliopInfo';
import { MdOutlineWarningAmber } from 'react-icons/md';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class EditReport extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="Main">
        <div className="leftWing">
          <ViliopInfo/>
        </div>
        <div className="rightWing">
          <div className="container">
            <div className="row">
              <div className="col-md-12" style={{ paddingTop:"calc(0.5 * var(--tTabHeight))" }}>
                <MdOutlineWarningAmber size={100}/>
                <h1 className="font-light">StartUp Error Occurred</h1>
                <h6>Please check the Log for more information</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
