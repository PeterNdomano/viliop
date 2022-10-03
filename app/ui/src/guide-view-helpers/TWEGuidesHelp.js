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
          Incorrect uses of encryption algorithms may result in sensitive data exposure, key leakage, broken authentication,
          insecure session, and spoofing attacks. There are some encryption or hash algorithms known to be weak and are not
          suggested for use such as MD5 and RC4.
          <br/>
          In addition to the right choices of secure encryption or hash algorithms, the right uses of parameters also matter for the
          security level. For example, ECB (Electronic Code Book) mode is not suggested for use in asymmetric encryption
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Provide a guideline for the identification weak encryption or hashing uses and implementations
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
            Vulnerability scanners such as Nessus, NMAP (scripts), or OpenVAS can scan for use or acceptance of weak
            encryption against protocol such as SNMP, TLS, SSH, SMTP, etc
          <hr/>
        </div>
      </div>
    </div>
  )
}
