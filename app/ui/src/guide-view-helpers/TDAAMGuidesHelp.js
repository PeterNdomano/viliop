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
          The misuse and invalid use of of valid functionality can identify attacks attempting to enumerate the web application,
          identify weaknesses, and exploit vulnerabilities. Tests should be undertaken to determine whether there are
          application-layer defensive mechanisms in place to protect the application.
          <br/>
          The lack of active defenses allows an attacker to hunt for vulnerabilities without any recourse. The application’s owner
          will thus not know their application is under attack
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Generate notes from all tests conducted against the system
            </li>
            <li>
              Review which tests had a different functionality based on aggressive input
            </li>
            <li>
              Understand the defenses in place and verify if they are enough to protect the system against bypassing
              techniques
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browsers, Burp Suite, OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
