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
          Web Cookies (herein referred to as cookies) are often a key attack vector for malicious users (typically targeting other
          users) and the application should always take due diligence to protect cookies.
          <br/>
          HTTP is a stateless protocol, meaning that it doesn’t hold any reference to requests being sent by the same user. In
          order to fix this issue, sessions were created and appended to HTTP requests. Browsers, as discussed in testing
          browser storage, contain a multitude of storage mechanisms. In that section of the guide, each is discussed thoroughly.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Ensure that the proper security configuration is set for cookies
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP ZAP, Burp Suite, FireSheep plugin for firefox, Cookie bro for FireFox
          <hr/>
        </div>
      </div>
    </div>
  )
}
