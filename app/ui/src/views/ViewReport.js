import React, { Component } from 'react';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //..
    }
  }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="panelTitle font-light">Pentesting Report</h1>
          </div>
          {
            (this.props.viliop.currentProject === null) ?
            <div className="col-md-12">
              <h6>You need to open or import project to use this part</h6>
            </div> :
            <div className="col-md-12">
              <div className="text-left"></div>
            </div>
          }
        </div>
      </div>
    )
  }
}
