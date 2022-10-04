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
          HTML injection is a type of injection vulnerability that occurs when a user is able to control an input point and is able to
          inject arbitrary HTML code into a vulnerable web page. This vulnerability can have many consequences, like
          disclosure of a user’s session cookies that could be used to impersonate the victim, or, more generally, it can allow the
          attacker to modify the page content seen by the victims.
          <br/>
          This vulnerability occurs when user input is not correctly sanitized and the output is not encoded. An injection allows
          the attacker to send a malicious HTML page to a victim. The targeted browser will not be able to distinguish (trust)
          legitimate parts from malicious parts of the page, and consequently will parse and execute the whole page in the
          victim’s context
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify HTML injection points and assess the severity of the injected content.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browsers
          <hr/>
        </div>
      </div>
    </div>
  )
}
