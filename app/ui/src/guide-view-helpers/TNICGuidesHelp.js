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
          The intrinsic complexity of interconnected and heterogeneous web server infrastructure, which can include hundreds of
          web applications, makes configuration management and review a fundamental step in testing and deploying every
          single application. It takes only a single vulnerability to undermine the security of the entire infrastructure, and even
          small and seemingly unimportant problems may evolve into severe risks for another application on the same server. In
          order to address these problems, it is of utmost importance to perform an in-depth review of configuration and known
          security issues, after having mapped the entire architecture.
          <br/>
          Proper configuration management of the web server infrastructure is very important in order to preserve the security of
          the application itself. If elements such as the web server software, the back-end database servers, or the authentication
          servers are not properly reviewed and secured, they might introduce undesired risks or introduce new vulnerabilities
          that might compromise the application itself.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              The different elements that make up the infrastructure need to be determined in order to understand how they
              interact with a web application and how they affect its security
            </li>
            <li>
              All the elements of the infrastructure need to be reviewed in order to make sure that they don’t contain any known
              vulnerabilities.
            </li>
            <li>
              A review needs to be made of the administrative tools used to maintain all the different elements.
            </li>
            <li>
              The authentication systems, need to reviewed in order to assure that they serve the needs of the application and
              that they cannot be manipulated by external users to leverage access
            </li>
            <li>
              A list of defined ports which are required for the application should be maintained and kept under change contro
            </li>
            <li>
              Review the applications’ configurations set across the network and validate that they are not vulnerabl
            </li>
            <li>
              Validate that used frameworks and systems are secure and not susceptible to known vulnerabilities due to
              unmaintained software or default settings and credentials.
            </li>
            <li>
              Test against known server vulnerabilities
            </li>
            <li>
              Test for administrative tools and interfaces
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP Zed Attack Proxy (ZAP), Burp Suite, Web Browsers
          <hr/>
        </div>
      </div>
    </div>
  )
}
