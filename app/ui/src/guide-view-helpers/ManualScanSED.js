/**
  For Manual Scan in Search Engine Discovery
  */

import React, { Component } from 'react';

export default class ManualScanSED extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>
              Perform a manual Search Engine Reconnaissance with tools and
              Engines of your choice then write a short report on your discoveries
            </h5>
            <h5 style={{ color:"var(--accentColor)", marginTop:"20px" }}><b>Tips:</b></h5>
            <ul>
              <li>Tip one</li>
              <li>Tip two</li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-accent">Report</label>
              <textarea className="form-control" rows={10}></textarea>
            </div>
            <div className="text-right">
              <button className="btn btn-sm btn-primary">SAVE REPORT</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
