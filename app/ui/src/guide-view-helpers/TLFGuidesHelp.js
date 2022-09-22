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
          Session termination is an important part of the session lifecycle. Reducing to a minimum the lifetime of the session
          tokens decreases the likelihood of a successful session hijacking attack. This can be seen as a control against
          preventing other attacks like Cross Site Scripting and Cross Site Request Forgery. Such attacks have been known to
          rely on a user having an authenticated session present. Not having a secure session termination only increases the
          attack surface for any of these attacks
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>Assess the logout UI</li>
            <li>Analyze the session timeout and if the session is properly killed after logout.</li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp Suite - Repeater
          <hr/>
        </div>
      </div>
    </div>
  )
}
