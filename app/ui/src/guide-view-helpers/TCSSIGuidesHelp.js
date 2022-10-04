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
          Cross Site Script Inclusion (XSSI) vulnerability allows sensitive data leakage across-origin or cross-domain
          boundaries. Sensitive data could include authentication-related data (login states, cookies, auth tokens, session IDs,
          etc.) or user’s personal or sensitive personal data (email addresses, phone numbers, credit card details, social security
          numbers, etc.). XSSI is a client-side attack similar to Cross Site Request Forgery (CSRF) but has a different purpose.
          Where CSRF uses the authenticated user context to execute certain state-changing actions inside a victim’s page (e.g.
          transfer money to the attacker’s account, modify privileges, reset password, etc.), XSSI instead uses JavaScript on the
          client-side to leak sensitive data from authenticated sessions.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Locate sensitive data across the system.
            </li>
            <li>
              Assess the leakage of sensitive data through various techniques.
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browsers,
          <hr/>
        </div>
      </div>
    </div>
  )
}
