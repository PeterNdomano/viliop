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
          SQL injection testing checks if it is possible to inject data into the application so that it executes a user-controlled SQL
          query in the database. Testers find a SQL injection vulnerability if the application uses user input to create SQL queries
          without proper input validation. A successful exploitation of this class of vulnerability allows an unauthorized user to
          access or manipulate data in the database.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify SQL injection points.
            </li>
            <li>
              Assess the severity of the injection and the level of access that can be achieved through it.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          SQL Injection Fuzz Strings (from wfuzz tool) - Fuzzdb, sqlbftools, sqlmap, MySqloit
          <hr/>
        </div>
      </div>
    </div>
  )
}
