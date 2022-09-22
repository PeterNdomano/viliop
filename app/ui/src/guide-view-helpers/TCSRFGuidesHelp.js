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
          Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unintended actions on a web
          application in which they are currently authenticated. With a little social engineering help (like sending a link via email
          or chat), an attacker may force the users of a web application to execute actions of the attacker’s choosing. A successful
          CSRF exploit can compromise end user data and operation when it targets a normal user. If the targeted end user is the
          administrator account, a CSRF attack can compromise the entire web application
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Determine whether it is possible to initiate requests on a user’s behalf that are not initiated by the user
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP ZAP, CSRF Tester, Pinata-csrf-tool
          <hr/>
        </div>
      </div>
    </div>
  )
}
