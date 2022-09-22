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
          Session Variable Overloading (also known as Session Puzzling) is an application level vulnerability which can enable
          an attacker to perform a variety of malicious actions
          <br/>
          This vulnerability occurs when an application uses the same session variable for more than one purpose. An attacker
          can potentially access pages in an order unanticipated by the developers so that the session variable is set in one
          context and then used in another.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify all session variables
            </li>
            <li>
              Break the logical flow of session generation
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp Suite, OWASP ZAP, Web Browsers
          <hr/>
        </div>
      </div>
    </div>
  )
}
