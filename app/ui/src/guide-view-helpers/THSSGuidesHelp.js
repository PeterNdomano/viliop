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
          HTTP Splitting exploits a lack of input sanitization which allows an intruder to insert CR and LF characters into the
          headers of the application response and to ‘split’ that answer into two different HTTP messages. The goal of the attack
          can vary from a cache poisoning to cross site scripting.
          <br/>
          In HTTP smuggling, the attacker exploits the fact that some specially crafted HTTP messages can be parsed and
          interpreted in different ways depending on the agent that receives them. HTTP smuggling requires some level of
          knowledge about the different agents that are handling the HTTP messages (web server, proxy, firewall) and therefore
          will be included only in the gray-box testing section.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Assess if the application is vulnerable to splitting, identifying what possible attacks are achievable
            </li>
            <li>
              Assess if the chain of communication is vulnerable to smuggling, identifying what possible attacks are achievable
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp Suite, OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
