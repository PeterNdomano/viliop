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
          An attacker who gets access to user session cookies can impersonate them by presenting such cookies. This attack is
          known as session hijacking. When considering network attackers, i.e., attackers who control the network used by the
          victim, session cookies can be unduly exposed to the attacker over HTTP. To prevent this, session cookies should be
          marked with the Secure attribute so that they are only communicated over HTTPS.
          <br/>
          Note that the Secure attribute should also be used when the web application is entirely deployed over HTTPS,
          otherwise the following cookie theft attack is possible
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify vulnerable session cookies
            </li>
            <li>
              Hijack vulnerable cookies and assess the risk level.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browsers, OWASP ZAP, JHijack
          <hr/>
        </div>
      </div>
    </div>
  )
}
