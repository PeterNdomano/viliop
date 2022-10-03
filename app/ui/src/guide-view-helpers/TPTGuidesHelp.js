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
          It is possible that attackers can gather information on an application by monitoring the time it takes to complete a task or
          give a respond. Additionally, attackers may be able to manipulate and break designed business process flows by
          simply keeping active sessions open and not submitting their transactions in the “expected” time frame.
          <br/>
          Process timing logic vulnerabilities is unique in that these manual misuse cases should be created considering
          execution and transaction timing that are application/system specific.
          <br/>
          Processing timing may give/leak information on what is being done in the application/system background processes. If
          an application allows users to guess what the particulate next outcome will be by processing time variations, users will
          be able to adjust accordingly and change behavior based on the expectation and “game the system”.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Review the project documentation for system functionality that may be impacted by time.
            </li>
            <li>
              Develop and execute misuse cases.
            </li>


          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP ZAP, Burp Suite
          <hr/>
        </div>
      </div>
    </div>
  )
}
