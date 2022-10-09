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
        {
          (this.props.viliop.currentProject === null) ?
          <div className="col-md-12">
            <h6>You need to open or import project to use this part</h6>
          </div> :
          <div className="col-md-12">
            <h6>Instructions on how to edit report will come here</h6>
          </div>
        }
        </div>
      </div>
    )
  }
}
