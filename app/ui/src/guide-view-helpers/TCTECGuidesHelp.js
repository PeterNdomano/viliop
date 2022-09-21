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
          Testing for credentials transport verifies that web applications encrypt authentication data in transit. This encryption
          prevents attackers from taking over accounts by sniffing network traffic. Web applications use HTTPS to encrypt
          information in transit for both client to server and server to client communications. A client can send or receive
          authentication data during the following interactions:
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Assess whether any use case of the web site or application causes the server or the client to exchange credentials
              without encryption
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp Suite, OWASP ZAP, WEB Browsers
          <hr/>
        </div>
      </div>
    </div>
  )
}
