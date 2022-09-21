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
            Rich Internet Applications (RIA) have adopted Adobe’s crossdomain.xml policy files to allow for controlled cross
            domain access to data and service consumption using technologies such as Oracle Java, Silverlight, and Adobe Flash.
            Therefore, a domain can grant remote access to its services from a different domain. However, often the policy files that
            describe the access restrictions are poorly configured. Poor configuration of the policy files enables Cross-site Request
            Forgery attacks, and may allow third parties to access sensitive data meant for the user.
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                Review and validate the policy files
              </li>

            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            Nikto, OWASP ZAP, W3af
            <hr/>
          </div>
        </div>
      </div>
    )
  }
