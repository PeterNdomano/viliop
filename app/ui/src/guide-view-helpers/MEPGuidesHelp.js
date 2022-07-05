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
          Before commencing security testing, understanding the structure of the application is paramount. Without a thorough
          understanding of the layout of the application, it is unlikely that it will be tested thoroughly.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Map the target application and understand the principal workflows.
            </li>
            <li>
              Use automated spidering tools
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp suite, OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
