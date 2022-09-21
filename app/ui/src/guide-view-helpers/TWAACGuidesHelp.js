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
          Even if the primary authentication mechanisms do not include any vulnerabilities, it may be that vulnerabilities exist in
          alternative legitimate authentication user channels for the same user accounts. Tests should be undertaken to identify
          alternative channels and, subject to test scoping, identify vulnerabilities.
          <br/>
          The alternative user interaction channels could be utilized to circumvent the primary channel, or expose information
          that can then be used to assist an attack against the primary channel. Some of these channels may themselves be
          separate web applications using different hostnames or paths.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify alternative authentication channels.
            </li>
            <li>
              Assess the security measures used and if any bypasses exists on the alternative channels.
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
