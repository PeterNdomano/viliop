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
          The Lightweight Directory Access Protocol (LDAP) is used to store information about users, hosts, and many other
          objects. LDAP injection is a server-side attack, which could allow sensitive information about users and hosts
          represented in an LDAP structure to be disclosed, modified, or inserted. This is done by manipulating input parameters
          afterwards passed to internal search, add, and modify functions.
          <br/>
          A web application could use LDAP in order to let users authenticate or search other users’ information inside a
          corporate structure. The goal of LDAP injection attacks is to inject LDAP search filters metacharacters in a query which
          will be executed by the application
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify LDAP injection points.
            </li>
            <li>
              Assess the severity of the injection.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Softerra LDAP Browser
          <hr/>
        </div>
      </div>
    </div>
  )
}
