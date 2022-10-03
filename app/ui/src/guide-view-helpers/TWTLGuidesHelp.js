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
          When information is sent between the client and the server, it must be encrypted and protected in order to prevent an
          attacker from being able to read or modify it. This is most commonly done using HTTPS, which uses the Transport
          Layer Security (TLS) protocol, a replacement for the older Secure Socket Layer (SSL) protocol. TLS also provides a
          way for the server to demonstrate to the client that they have connected to the correct server, by presenting a trusted
          digital certificate.
          <br/>
          Over the years there have been a large number of cryptographic weaknesses identified in the SSL and TLS protocols,
          as well as in the ciphers that they use. Additionally, many of the implementations of these protocols have also had
          serious vulnerabilities. As such, it is important to test that sites are not only implementing TLS, but that they are doing so
          in a secure manner
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Validate the service configuration.
            </li>
            <li>
              Review the digital certificate’s cryptographic strength and validity.
            </li>
            <li>
              Ensure that the TLS security is not bypassable and is properly implemented across the application
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          nmap, OWASP O-Saft, sslscan, sslyze, SSL Labs, testssl.sh
          <hr/>
        </div>
      </div>
    </div>
  )
}
