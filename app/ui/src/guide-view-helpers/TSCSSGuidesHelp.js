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
          Stored Cross-site Scripting (XSS) is the most dangerous type of Cross Site Scripting. Web applications that allow users
          to store data are potentially exposed to this type of attack
          <br/>
          Stored XSS occurs when a web application gathers input from a user which might be malicious, and then stores that
          input in a data store for later use. The input that is stored is not correctly filtered. As a consequence, the malicious data
          will appear to be part of the web site and run within the user’s browser under the privileges of the web application.
          Since this vulnerability typically involves at least two requests to the application, this may also called second-order
          XSS
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify stored input that is reflected on the client-side
            </li>
            <li>
               identify all points where user input is stored into the back-end and then displayed by the application
            </li>
            <li>
              Assess the input they accept and the encoding that gets applied on return (if any)
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          PHP Charset Encoder(PCE), Hackvertor, BeEF, XSS-Proxy, Burp Proxy, XSS Assistant, OWASP Zed Attack Proxy (ZAP)
          <hr/>
        </div>
      </div>
    </div>
  )
}
