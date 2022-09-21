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
            Insecure Direct Object References (IDOR) occur when an application provides direct access to objects based on user-
            supplied input. As a result of this vulnerability attackers can bypass authorization and access resources in the system
            directly, for example database records or files. Insecure Direct Object References allow attackers to bypass
            authorization and access resources directly by modifying the value of a parameter used to directly point to an object.
            Such resources can be database entries belonging to other users, files in the system, and more. This is caused by the
            fact that the application takes user supplied input and uses it to retrieve an object without performing sufficient
            authorization checks
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                Identify points where object references may occur.
              </li>
              <li>
                Assess the access control measures and if they’re vulnerable to IDOR.
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
