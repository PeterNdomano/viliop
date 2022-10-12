import React, { Component } from 'react';
import $ from 'jquery';
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
            <h5 className="font-light">
              Your Project is located at:
            </h5>
            <h6 className="font-light">
              <i>{this.props.viliop.currentProject.projectDir}</i>
            </h6>
            <h5 style={{ marginTop:"30px" }}>You can compress it and share it via email or other services</h5>
          </div>
        </div>
      </div>
    )
  }
}
