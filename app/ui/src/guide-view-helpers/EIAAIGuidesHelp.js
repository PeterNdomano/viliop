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
            Administrator interfaces may be present in the application or on the application server to allow certain users to
            undertake privileged activities on the site. Tests should be undertaken to reveal if and how this privileged functionality
            can be accessed by an unauthorized or standard user.
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                Identify hidden administrator interfaces and functionality
              </li>
              <li>
                Directory and file enumeration. An administrative interface may be present but not visibly available to the tester.
                Attempting to guess the path of the administrative interface may be as simple as requesting: <span className="codeText">/admin</span> or
                <span className="codeText">/administrator</span> etc.. or in some scenarios can be revealed within seconds using Google dorks
              </li>
              <li>
                Comments and links in source code. Many sites use common code that is loaded for all site users. By examining
                all source sent to the client, links to administrator functionality may be discovered and should be investigated
              </li>
              <li>Reviewing server and application documentation</li>
              <li>Publicly available information</li>
              <li>Alternative server por</li>
              <li>
                Parameter tampering. A GET or POST parameter or a cookie variable may be required to enable the administrator
                functionality
              </li>
            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            OWASP ZAP - Forced Browsing, THC-HYDRA, Any brute forcer with a good dictionary eg <span className="linkText">netsparker</span>
            <hr/>
          </div>
        </div>
      </div>
    )
  }
