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
          The provisioning of accounts presents an opportunity for an attacker to create a valid account without application of the
          proper identification and authorization process.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Is there any verification, vetting and authorization of provisioning requests?
            </li>
            <li>
              Is there any verification, vetting and authorization of de-provisioning requests?
            </li>
            <li>
              Can an administrator provision other administrators or just users?
            </li>
            <li>
              Can an administrator or other user provision accounts with privileges greater than their own?
            </li>
            <li>
              Can an administrator or user de-provision themselves?
            </li>
            <li>
              How are the files or resources owned by the de-provisioned user managed? Are they deleted? Is access
              transferred?
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          HTTP Proxy, Web Browsers
          <hr/>
        </div>
      </div>
    </div>
  )
}
