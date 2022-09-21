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
            This kind of test focuses on verifying how the authorization schema has been implemented for each role or privilege to
            get access to reserved functions and resources
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                Assess if horizontal or vertical access is possible.
              </li>

            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            OWASP ZAP ( Access Control Add-on ), Burp Suite(AuthMatrix and Autorize extensions)
            <hr/>
          </div>
        </div>
      </div>
    )
  }
