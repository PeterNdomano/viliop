import React, { Component } from 'react';
import ViliopInfo from './ViliopInfo';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class ConfigSetting extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="container">
        <h1 className="font-light" style={{ marginTop:"calc(var(--tTabHeight) * 0.5)", marginBottom:"calc(var(--tTabHeight) * 0.5)" }}>Viliop Configuration</h1>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-success font-light">Environment <br/>Settings</h3>
            <div className="form-group">
              <label>Viliop Tools Folder</label>
              <input className="form-control" />
              <small className="text-muted form-text">Location for Viliop Tools</small>
            </div>
            <div className="form-group">
              <label>Python 3 Executable Path</label>
              <input className="form-control" />
              <small className="text-muted form-text">Location for python 3 executable</small>
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="text-success font-light">User <br/>Settings</h3>
            <div className="form-group">
              <label>Your name</label>
              <input className="form-control" />
              <small className="text-muted form-text">This will be used on your reports</small>
            </div>
            <div className="form-group">
              <label>Your Email Address</label>
              <input className="form-control" />
              <small className="text-muted form-text">This will be used on your reports</small>
            </div>
          </div>

          <div className="col-md-12 text-right" style={{ paddingBottom:"40px" }}>
            <button className="btn btn-warning text-dark font-bold">SAVE CONFIGURATIONS</button>
          </div>

        </div>
      </div>
    )
  }
}
