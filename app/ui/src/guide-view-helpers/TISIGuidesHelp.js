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
          This threat affects all applications that communicate with mail servers (IMAP/SMTP), generally webmail applications.
          The aim of this test is to verify the capacity to inject arbitrary IMAP/SMTP commands into the mail servers, due to input
          data not being properly sanitized.
          <br/>
          The IMAP/SMTP Injection technique is more effective if the mail server is not directly accessible from Internet. Where
          full communication with the backend mail server is possible, it is recommended to conduct direct testing.
          <br/>
          An IMAP/SMTP Injection makes it possible to access a mail server which otherwise would not be directly accessible
          from the Internet. In some cases, these internal systems do not have the same level of infrastructure security and
          hardening that is applied to the front-end web servers. Therefore, mail server results may be more vulnerable to attacks
          by end users
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify IMAP/SMTP injection points
            </li>
            <li>
              Understand the data flow and deployment structure of the system.
            </li>
            <li>
              Assess the injection impacts
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          ..
          <hr/>
        </div>
      </div>
    </div>
  )
}
