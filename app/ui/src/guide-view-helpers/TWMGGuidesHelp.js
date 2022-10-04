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
          Web Messaging (also known as Cross Document Messaging) allows applications running on different domains to
          communicate in a secure manner. Before the introduction of web messaging, the communication of different origins
          (between iframes, tabs and windows) was restricted by the same origin policy and enforced by the browser. Developers
          used multiple hacks in order to accomplish these tasks, and most of them were mainly insecure.
          <br/>
          This restriction within the browser is in place to prevent a malicious website from reading confidential data from other
          iframes, tabs, etc; however, there are some legitimate cases where two trusted websites need to exchange data with
          each other. To meet this need, Cross Document Messaging was introduced in the WHATWG HTML5 draft specification
          and was implemented in all major browsers. It enables secure communications between multiple origins across
          iframes, tabs and windows.
          <br/>
          The messaging API introduced the <span className="codeText">postMessage()</span> method, with which plain-text messages can be sent cross-origin. It
          consists of two parameters: message, and domain
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Assess the security of the message’s origin
            </li>
            <li>
              Validate that it’s using safe methods and validating its input.
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
