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
          The Session Tokens (Cookie, SessionID, Hidden Field), if exposed, will usually enable an attacker to impersonate a
          victim and access the application illegitimately. It is important that they are protected from eavesdropping at all times,
          particularly whilst in transit between the client browser and the application servers.
          <br/>
          The information here relates to how transport security applies to the transfer of sensitive Session ID data rather than
          data in general, and may be stricter than the caching and transport policies applied to the data served by the site.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Ensure that proper encryption is implemented.
            </li>
            <li>
              Review the caching configuration.
            </li>
            <li>
              Assess the channel and methods’ security
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browsers, Burp Suite,  OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
