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
          Many application’s business processes allow users to upload data to them. Although input validation is widely
          understood for text-based input fields, it is more complicated to implement when files are accepted. Although many
          sites implement simple restrictions based on a list of permitted (or blocked) extensions, this is not sufficient to prevent
          attackers from uploading legitimate file types that have malicious contents.
          <br/>
          Vulnerabilities related to the uploading of malicious files is unique in that these “malicious” files can easily be rejected
          through including business logic that will scan files during the upload process and reject those perceived as malicious.
          Additionally, this is different from uploading unexpected files in that while the file type may be accepted the file may still
          be malicious to the system
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify the file upload functionality
            </li>
            <li>
              Review the project documentation to identify what file types are considered acceptable, and what types would be
              considered dangerous or malicious.
            </li>
            <li>
              Determine how the uploaded files are processed.
            </li>
            <li>
              Obtain or create a set of malicious files for testing
            </li>
            <li>
              Try to upload the malicious files to the application and determine whether it is accepted and processed.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Metasploit, Intercepting proxy
          <hr/>
        </div>
      </div>
    </div>
  )
}
