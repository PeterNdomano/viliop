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
          The complexity of interconnected and heterogeneous web infrastructure can include hundreds of web applications and
          makes configuration management and review a fundamental step in testing and deploying every single application. In
          fact it takes only a single vulnerability to undermine the security of the entire infrastructure, and even small and
          seemingly unimportant problems may evolve into severe risks for another application in the same infrastructure.
          To address these problems, it is of utmost importance to perform an in-depth review of configuration and known security
          issues. Before performing an in-depth review it is necessary to map the network and application architecture. The
          different elements that make up the infrastructure need to be determined to understand how they interact with a web
          application and how they affect security
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          The application architecture needs to be mapped through some test to determine what different components are used
          to build the web application. In small setups, such as a simple PHP application, a single server might be used that
          serves the PHP application, and perhaps also the authentication mechanism.
          On more complex setups, such as an online bank system, multiple servers might be involved. These may include a
          reverse proxy, a front-end web server, an application server, and a database server or LDAP server. Each of these
          servers will be used for different purposes and might even be segregated in different networks with firewalls between
          them. This creates different network zones so that access to the web server will not necessarily grant a remote user
          access to the authentication mechanism itself, and so that compromises of the different elements of the architecture can
          be isolated so that they will not compromise the whole architecture.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          <ul>
            <li>
              Browsers (Chrome, firefox)
            </li>
            <li>
              Burp suite, ZAP
            </li>
          </ul>
          <hr/>
        </div>
      </div>
    </div>
  )
}
