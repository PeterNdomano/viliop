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
            File extensions are commonly used in web servers to easily determine which technologies, languages and plugins
            must be used to fulfill the web request. While this behavior is consistent with RFCs and Web Standards, using standard
            file extensions provides the penetration tester useful information about the underlying technologies used in a web
            appliance and greatly simplifies the task of determining the attack scenario to be used on particular technologies. In
            addition, mis-configuration of web servers could easily reveal confidential information about access credentials.
            <br/>
            Extension checking is often used to validate files to be uploaded, which can lead to unexpected results because the
            content is not what is expected, or because of unexpected OS filename handling.
            <br/>
            Determining how web servers handle requests corresponding to files having different extensions may help in
            understanding web server behavior depending on the kind of files that are accessed
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                <b>Forced Browsing:</b> Submit requests with different file extensions and verify how they are handled
              </li>
              <li>
                Test how uploaded files are handled by the target whenever file upload functionality is available
              </li>
            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            Nessus, Nikto, wget, curl
            <hr/>
          </div>
        </div>
      </div>
    )
  }
