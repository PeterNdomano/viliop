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
          Reflected Cross-site Scripting (XSS) occur when an attacker injects browser executable code within a single HTTP
          response. The injected attack is not stored within the application itself; it is non-persistent and only impacts users who
          open a maliciously crafted link or third-party web page. The attack string is included as part of the crafted URI or HTTP
          parameters, improperly processed by the application, and returned to the victim.
          <br/>
          Reflected XSS are the most frequent type of XSS attacks found in the wild. Reflected XSS attacks are also known as
          non-persistent XSS attacks and, since the attack payload is delivered and executed via a single request and response,
          they are also referred to as first-order or type 1 XSS.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify variables that are reflected in responses
            </li>
            <li>
              Assess the input they accept and the encoding that gets applied on return (if any)
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          PHP Charset Encoder(PCE), Hackvertor, XSS-Proxy, ratproxy, Burp Proxy, OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
