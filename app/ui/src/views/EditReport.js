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
            <h1 className="panelTitle">Edit Report</h1>
            <h5 className="font-reg text-muted">
              Click <span className="codeText">Project</span> on top menu then choose <span className="codeText">Current Project</span>.
              Guide Menu will appear on the left sidebar, then you can choose a section and report on any particular subsection by clicking a 'REPORT' button on that sub-section.
            </h5>
          </div>
        }
        </div>
      </div>
    )
  }
}
