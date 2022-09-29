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
          Also often referred to as persistent attacks, incubated testing is a complex testing method that needs more than one
          data validation vulnerability to work. Incubated vulnerabilities are typically used to conduct “watering hole” attacks
          against users of legitimate web applications.
          <br/>
          Incubated vulnerabilities have the following characteristics:
          <br/>
          1) The attack vector needs to be persisted in the first place, it needs to be stored in the persistence layer, and this
          would only occur if weak data validation was present or the data arrived into the system via another channel such
          as an admin console or directly via a backend batch process.
          <br/>
          2) Secondly, once the attack vector was “recalled” the vector would need to be executed successfully. For example,
          an incubated XSS attack would require weak output validation so the script would be delivered to the client in its
          executable form.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify injections that are stored and require a recall step to the stored injection.
            </li>
            <li>
              Understand how a recall step could occur.
            </li>
            <li>
              Set listeners or activate the recall step if possible.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          XSS-Proxy, OWASP ZAP, Burp Suite, Metasploit
          <hr/>
        </div>
      </div>
    </div>
  )
}
