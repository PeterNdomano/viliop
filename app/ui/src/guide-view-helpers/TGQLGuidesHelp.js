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
          GraphQL has become very popular in modern APIs. It provides simplicity and nested objects, which facilitate faster
          development. While every technology has advantages, it can also expose the application to new attack surfaces. The
          purpose of this scenario is to provide some common misconfigurations and attack vectors on applications that utilize
          GraphQL. Some vectors are unique to GraphQL (e.g. Introspection Query) and some are generic to APIs (e.g. SQL
          injection)
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Assess that a secure and production-ready configuration is deployed
            </li>
            <li>
              Validate all input fields against generic attacks.
            </li>
            <li>
              Ensure that proper access controls are applied.
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          GraphQL Playground, GraphQL Voyager, sqlmap, inQL(Burp Extension), GraphQL Raider(Burp Extension), GraphQL (Add-on for OWASP ZAP)
          <hr/>
        </div>
      </div>
    </div>
  )
}
