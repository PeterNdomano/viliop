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
          Sensitive data must be protected when it is transmitted through the network. If data is transmitted over HTTPS or
          encrypted in another way the protection mechanism must not have limitations or vulnerabilities
          <br/>
          As a rule of thumb if data must be protected when it is stored, this data must also be protected during transmission.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify sensitive information transmitted through the various channel
            </li>
            <li>
              Assess the privacy and security of the channels used
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          curl, grep, Identity Finder, Wire Shark, TCPDUMP
          <hr/>
        </div>
      </div>
    </div>
  )
}
