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
          Cross origin resource sharing (CORS) is a mechanism that enables a web browser to perform cross-domain requests
          using the XMLHttpRequest L2 API in a controlled manner. In the past, the XMLHttpRequest L1 API only allowed
          requests to be sent within the same origin as it was restricted by the same origin policy.
          <br/>
          Cross-origin requests have an origin header that identifies the domain initiating the request and is always sent to the
          server. CORS defines the protocol to use between a web browser and a server to determine whether a cross-origin
          request is allowed. HTTP headers are used to accomplish this
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify endpoints that implement CORS.
            </li>
            <li>
              Ensure that the CORS configuration is secure or harmless
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browsers, Burp Suite, OWASP - ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
