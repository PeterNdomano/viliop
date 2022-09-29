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
          Web applications commonly use server-side templating technologies (Jinja2, Twig, FreeMaker, etc.) to generate
          dynamic HTML responses. Server-side Template Injection vulnerabilities (SSTI) occur when user input is embedded in
          a template in an unsafe manner and results in remote code execution on the server. Any features that support
          advanced user-supplied markup may be vulnerable to SSTI including wiki-pages, reviews, marketing applications,
          CMS systems etc. Some template engines employ various mechanisms (eg. sandbox, allow listing, etc.) to protect
          against SSTI.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Detect template injection vulnerability points.
            </li>
            <li>
              Identify the templating engine.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Tplmap, Backslash Powered By Scanner Burp Suite extension, Template expression test strings/payloads list
          <hr/>
        </div>
      </div>
    </div>
  )
}
