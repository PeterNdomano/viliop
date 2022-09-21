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
          Credentials are the most widely used authentication technology. Due to such a wide usage of username-password
          pairs, users are no longer able to properly handle their credentials across the multitude of used applications
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Validate that the generated session is managed securely and do not put the user’s credentials in danger
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
