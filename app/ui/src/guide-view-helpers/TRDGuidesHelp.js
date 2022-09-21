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
          Applications have several types of functionalities and services, and those require access permissions based on the
          needs of the user. That user could be Adminstrator, auditor, support engineer or customer.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Explore Application documentation to check whether Application roles are described there.
            </li>
            <li>
              Guidance by the developers or administrators of the application.
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp's Autorize extension, OWASP ZAP's Access Control Testing add-on
          <hr/>
        </div>
      </div>
    </div>
  )
}
