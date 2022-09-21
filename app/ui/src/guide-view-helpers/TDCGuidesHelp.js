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
          Nowadays web applications often make use of popular Open Source or commercial software that can be installed on
          servers with minimal configuration or customization by the server administrator. Moreover, a lot of hardware appliances
          (i.e. network routers and database servers) offer web-based configuration or administrative interfaces.
          <br/>
          Often these applications, once installed, are not properly configured and the default credentials provided for initial
          authentication and configuration are never changed. These default credentials are well known by penetration testers
          and, unfortunately, also by malicious attackers, who can use them to gain access to various types of applications.
          <br/>
          Furthermore, in many situations, when a new account is created on an application, a default password (with some
          standard characteristics) is generated. If this password is predictable and the user does not change it on the first
          access, this can lead to an attacker gaining unauthorized access to the application.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Enumerate the applications for default credentials and validate if they still exist.
            </li>
            <li>
              Review and assess new user accounts and if they are created with any defaults or identifiable patterns
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp Intruder, THC Hydra, Nikto 2
          <hr/>
        </div>
      </div>
    </div>
  )
}
