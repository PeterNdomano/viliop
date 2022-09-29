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
          Tester should check if it is possible to enter code as input on a web page and have it
          executed by the web server.
          <br/>
          In Code Injection testing, a tester submits input that is processed by the web server as dynamic code or as an included
          file. These tests can target various server-side scripting engines, e.g., ASP or PHP. Proper input validation and secure
          coding practices need to be employed to protect against these attacks.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Test for local file inclusion
            </li>
            <li>
              Test for remote file inclusion
            </li>
            <li>
              Identify injection points where you can inject code into the application
            </li>
            <li>
              Assess the injection severity.
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          kadimus, LFI Suite, OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
