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
          Web applications often interact with internal or external resources. While you may expect that only the intended
          resource will be handling the data you send, improperly handled data may create a situation where injection attacks
          are possible. One type of injection attack is called Server-side Request Forgery (SSRF). A successful SSRF attack can
          grant the attacker access to restricted actions, internal services, or internal files within the application or the
          organization. In some cases, it can even lead to Remote Code Execution (RCE).
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify SSRF injection points.
            </li>
            <li>
              Test if the injection points are exploitable.
            </li>
            <li>
              Assess the severity of the vulnerability
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
