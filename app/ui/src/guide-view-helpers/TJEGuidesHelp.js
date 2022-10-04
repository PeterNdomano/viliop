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
          A JavaScript injection vulnerability is a subtype of cross site scripting (XSS) that involves the ability to inject arbitrary
          JavaScript code that is executed by the application inside the victim’s browser. This vulnerability can have many
          consequences, like the disclosure of a user’s session cookies that could be used to impersonate the victim, or, more
          generally, it can allow the attacker to modify the page content seen by the victims or the application’s behavior.
          <br/>
          JavaScript injection vulnerabilities can occur when the application lacks proper user-supplied input and output
          validation. As JavaScript is used to dynamically populate web pages, this injection occurs during this content
          processing phase and consequently affects the victim
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify sinks and possible JavaScript injection points.
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
