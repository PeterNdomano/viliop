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
          HTTP Parameter Pollution tests the applications response to receiving multiple HTTP parameters with the same name;
          for example, if the parameter username is included in the GET or POST parameters twice.
          <br/>
          Supplying multiple HTTP parameters with the same name may cause an application to interpret values in unanticipated
          ways. By exploiting these effects, an attacker may be able to bypass input validation, trigger application errors or modify
          internal variables values. As HTTP Parameter Pollution (in short HPP) affects a building block of all web technologies,
          server and client-side attacks exist
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify the backend and the parsing method used
            </li>
            <li>
              Assess injection points and try bypassing input filters using HPP.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP ZAP Passive/Active Scanners
          <hr/>
        </div>
      </div>
    </div>
  )
}
