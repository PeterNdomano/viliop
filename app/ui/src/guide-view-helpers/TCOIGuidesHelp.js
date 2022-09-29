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
          The tester will try to inject an OS command
          through an HTTP request to the application.
          <br/>
          OS command injection is a technique used via a web interface in order to execute OS commands on a web server. The
          user supplies operating system commands through a web interface in order to execute OS commands. Any web
          interface that is not properly sanitized is subject to this exploit. With the ability to execute OS commands, the user can
          upload malicious programs or even obtain passwords. OS command injection is preventable when security is
          emphasized during the design and development of applications
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify and assess the command injection points.
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP WebGoat, Commix
          <hr/>
        </div>
      </div>
    </div>
  )
}
