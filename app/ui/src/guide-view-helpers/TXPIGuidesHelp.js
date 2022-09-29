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
          XPath is a language that has been designed and developed primarily to address parts of an XML document. In XPath
          injection testing, we test if it is possible to inject XPath syntax into a request interpreted by the application, allowing an
          attacker to execute user-controlled XPath queries. When successfully exploited, this vulnerability may allow an attacker
          to bypass authentication mechanisms or access information without proper authorization.
          <br/>
          Web applications heavily use databases to store and access the data they need for their operations. Historically,
          relational databases have been by far the most common technology for data storage, but, in the last years, we are
          witnessing an increasing popularity for databases that organize data using the XML language. Just like relational
          databases are accessed via SQL language, XML databases use XPath as their standard query language.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify XPATH injection points.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          ..
          <hr/>
        </div>
      </div>
    </div>
  )
}
