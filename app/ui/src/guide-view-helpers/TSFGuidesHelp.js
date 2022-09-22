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
          Session fixation is enabled by the insecure practice of preserving the same value of the session cookies before and
          after authentication. This typically happens when session cookies are used to store state information even before login,
          e.g., to add items to a shopping cart before authenticating for payment.
          <br/>
          In the generic exploit of session fixation vulnerabilities, an attacker can obtain a set of session cookies from the target
          website without first authenticating. The attacker can then force these cookies into the victim’s browser using different
          techniques. If the victim later authenticates at the target website and the cookies are not refreshed upon login, the victim
          will be identified by the session cookies chosen by the attacker. The attacker is then able to impersonate the victim with
          these known cookies.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Analyze the authentication mechanism and its flow.
            </li>

            <li>
              Force cookies and assess the impact.
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
