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
          In computer security, authentication is the process of attempting to verify the digital identity of the sender of a
          communication. A common example of such a process is the log on process. Testing the authentication schema means
          understanding how the authentication process works and using that information to circumvent the authentication
          mechanism.
          <br/>
          While most applications require authentication to gain access to private information or to execute tasks, not every
          authentication method is able to provide adequate security. Negligence, ignorance, or simple understatement of
          security threats often result in authentication schemes that can be bypassed by simply skipping the log in page and
          directly calling an internal page that is supposed to be accessed only after authentication has been performed.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Directly access pages that require authentication (Forced Browsing)
            </li>
            <li>
              Parameter modification
            </li>
            <li>
              Session ID prediction
            </li>
            <li>
              SQL injection
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          WebGoat, OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
