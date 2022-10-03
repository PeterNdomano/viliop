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
          Many applications’ business processes allow for the upload and manipulation of data that is submitted via files. But the
          business process must check the files and only allow certain “approved” file types. Deciding what files are “approved”
          is determined by the business logic and is application/system specific. The risk in that by allowing users to upload files,
          attackers may submit an unexpected file type that that could be executed and adversely impact the application or
          system through attacks that may deface the web site, perform remote commands, browse the system files, browse the
          local resources, attack other servers, or exploit the local vulnerabilities, just to name a few.
          <br/>
          Vulnerabilities related to the upload of unexpected file types is unique in that the upload should quickly reject a file if it
          does not have a specific extension. Additionally, this is different from uploading malicious files in that in most cases an
          incorrect file format may not by it self be inherently “malicious” but may be detrimental to the saved data. For example if
          an application accepts Windows Excel files, if an similar database file is uploaded it may be read but data extracted my
          be moved to incorrect locations
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Review the project documentation for file types that are rejected by the system
            </li>
            <li>
              Verify that the unwelcomed file types are rejected and handled safely
            </li>
            <li>
              Verify that file batch uploads are secure and do not allow any bypass against the set security measures.
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browsers
          <hr/>
        </div>
      </div>
    </div>
  )
}
