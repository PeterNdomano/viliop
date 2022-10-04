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
          This is also known as open redirection. It is an input
          validation flaw that exists when an application accepts user-controlled input that specifies a link which leads to an
          external URL that could be malicious. This kind of vulnerability could be used to accomplish a phishing attack or
          redirect a victim to an infection page.
          <br/>
          This vulnerability occurs when an application accepts untrusted input that contains a URL value and does not sanitize
          it. This URL value could cause the web application to redirect the user to another page, such as a malicious page
          controlled by the attacker.
          <br/>
          This vulnerability may enable an attacker to successfully launch a phishing scam and steal user credentials. Since the
          redirection is originated by the real application, the phishing attempts may have a more trustworthy appearance
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify injection points that handle URLs or paths.
            </li>
            <li>
              Assess the locations that the system could redirect to
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
