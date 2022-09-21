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
            HTTP offers a number of methods that can be used to perform actions on the web server (the HTTP 1.1 standard refers
            to them as methods but they are also commonly described as verbs ). While GET and POST are by far the most
            common methods that are used to access information provided by a web server, HTTP allows several other (and
            somewhat less known) methods. Some of these can be used for nefarious purposes if the web server is misconfigured
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                Enumerate supported HTTP methods.
              </li>
              <li>
                Test for access control bypass
              </li>
              <li>
                Test XST vulnerabilities.
              </li>
              <li>
                Test HTTP method overriding techniques.
              </li>
              <li>
                Use the <span>http-methods</span> Nmap script on Applications endpoints
              </li>
            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            Ncat, cURL, nmap http-methods script, w3af plugin htaccess_methods
            <hr/>
          </div>
        </div>
      </div>
    )
  }
