import React, { Component } from 'react';
import $ from 'jquery';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class EditReport extends Component {
  constructor(props) {
    super(props);

  }

  export = (input) => {
    //get chosen directory path
    let selectedPath = input.files[0].path;
    let exportDir = path.parse(selectedPath).dir;
    console.log(exportDir);

    //resetting input field at last
    input.value = '';
    input.files = null;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="font-light">Project folder will be zipped and exported, click the button below to continue</h5>
            <input id="_exportFolder" onChange={(e) => this.export(e.target)} type="file" webkitdirectory="true" directory="true" hidden={true}/>
            <button style={{ marginLeft:"0px" }} className="btn btn-primary" onClick={() => $('#_exportFolder').click() }>Export..</button>
          </div>
        </div>
      </div>
    )
  }
}
