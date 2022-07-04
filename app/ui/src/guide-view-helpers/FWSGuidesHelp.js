/**
  For Automatic Scan in Search Engine Discovery
  */

import React, { Component } from 'react';

export default function FWSGuidesHelp(props){

  let viliop = props.viliop;
  let project = viliop.currentProject;


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="helpTitle">Intro:</h3>
            Identify the type and version of Web Server powering <span className="linkText">{project.config.targetUrl}</span>. This information can
            be used to test the already-known vulnerabilities of known servers and versions. You can use Viliop FWS Scanner to help you on this
            or do it either with other tools or manually.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>You can use Banner grabbing by checking for <span className="codeText">Server</span> or related fields in http Headers</li>
            <li>Sending Malformed requests to the server and then comparing their response & headers to known servers may help in discovering server identity</li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Aside from our FWS Scanner you can use Netcraft, Nikto and Nmap to help you get desirable results
          <hr/>
        </div>
      </div>
    </div>
  )
}
