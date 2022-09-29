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
          A web server commonly hosts several web applications on the same IP address, referring to each application via the
          virtual host. In an incoming HTTP request, web servers often dispatch the request to the target virtual host based on the
          value supplied in the Host header. Without proper validation of the header value, the attacker can supply invalid input
          to cause the web server to: <br/>
          1) dispatch requests to the first virtual host on the list <br/>
          2) cause a redirect to an attacker-controlled domain <br/>
          3) perform web cache poisoning <br/>
          4) manipulate password reset functionality <br/>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Assess if the Host header is being parsed dynamically in the application
            </li>
            <li>
              Bypass security controls that rely on the header.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          ...
          <hr/>
        </div>
      </div>
    </div>
  )
}
