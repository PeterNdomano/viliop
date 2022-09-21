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
          Some websites offer a user registration process that automates (or semi-automates) the provisioning of system access
          to users. The identity requirements for access vary from positive identification to none at all, depending on the security
          requirements of the system. Many public applications completely automate the registration and provisioning process
          because the size of the user base makes it impossible to manage manually. However, many corporate applications will
          provision users manually, so this test case may not apply.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Test if anyone can register for access
            </li>
            <li>
              Are registrations vetted by a human prior to provisioning, or are they automatically granted if the criteria are met?
            </li>
            <li>
              Can the same person or identity register multiple times?
            </li>
            <li>
              Can users register for different roles or permissions?
            </li>
            <li>
              What proof of identity is required for a registration to be successful?
            </li>
            <li>
              Are registered identities verified?
            </li>
            <li>
              Can identity information be easily forged or faked?
            </li>
            <li>
              Can the exchange of identity information be manipulated during registration?
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
