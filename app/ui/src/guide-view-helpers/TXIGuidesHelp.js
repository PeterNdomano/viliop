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
          XML Injection testing is when a tester tries to inject an XML doc to the application. If the XML parser fails to contextually
          validate data, then the test will yield a positive result.
          <br/>
          This section describes practical examples of XML Injection. First, an XML style communication will be defined and its
          working principles explained. Then, the discovery method in which we try to insert XML metacharacters. Once the first
          step is accomplished, the tester will have some information about the XML structure, so it will be possible to try to inject
          XML data and tags (Tag Injection).
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify XML injection points.
            </li>
            <li>
              Assess the types of exploits that can be attained and their severities.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          XML Injection Fuzz Strings (from wfuzz tool)
          <hr/>
        </div>
      </div>
    </div>
  )
}
