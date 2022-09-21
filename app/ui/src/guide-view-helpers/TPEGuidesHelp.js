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
          This section describes the issue of escalating privileges from one stage to another. During this phase, the tester should
          verify that it is not possible for a user to modify their privileges or roles inside the application in ways that could allow
          privilege escalation attacks.
          <br/>
          Privilege escalation occurs when a user gets access to more resources or functionality than they are normally allowed,
          and such elevation or changes should have been prevented by the application. This is usually caused by a flaw in the
          application. The result is that the application performs actions with more privileges than those intended by the
          developer or system administrator.
          <br/>
          The degree of escalation depends on what privileges the attacker is authorized to possess, and what privileges can be
          obtained in a successful exploit. For example, a programming error that allows a user to gain extra privilege after
          successful authentication limits the degree of escalation, because the user is already authorized to hold some
          privilege. Likewise, a remote attacker gaining superuser privilege without any authentication presents a greater degree
          of escalation
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify injection points related to privilege manipulation.
            </li>
            <li>
              Fuzz or otherwise attempt to bypass security measures.
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
