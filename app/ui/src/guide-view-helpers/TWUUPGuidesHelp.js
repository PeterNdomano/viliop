/**
  For Automatic Scan in Search Engine Discovery
  */

import React from 'react';

export default function GuidesHelp(props){

  let viliop = props.viliop;
  let project = viliop.currentProject;


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="helpTitle">Intro:</h3>
          User account names are often highly structured (e.g. Joe Bloggs account name is jbloggs and Fred Nurks account
          name is fnurks) and valid account names can easily be guessed
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Determine the structure of account names
            </li>
            <li>
              Evaluate the application’s response to valid and invalid account names.
            </li>
            <li>
              Use different responses to valid and invalid account names to enumerate valid account names.
            </li>
            <li>
              Use account name dictionaries to enumerate valid account names.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browsers
          <hr/>
        </div>
      </div>
    </div>
  )
}
