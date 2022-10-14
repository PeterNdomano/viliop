import React, { Component } from 'react';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class EditReport extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="panelTitle">Installed Tools</h1>
          </div>
        </div>
      </div>
    )
  }
}
