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
            The HTTP Strict Transport Security (HSTS) feature lets a web application inform the browser through the use of a
            special response header that it should never establish a connection to the specified domain servers using un-
            encrypted HTTP. Instead, it should automatically establish all connection requests to access the site through HTTPS. It
            also prevents users from overriding certificate errors.
            <br/>
            Considering the importance of this security measure it is prudent to verify that the web site is using this HTTP header in
            order to ensure that all the data travels encrypted between the web browser and the server.
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                Review the HSTS header and its validity.
              </li>
              <li>
                The presence of the HSTS header can be confirmed by examining the server’s response through an intercepting proxy
                or by using curl
              </li>
            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            curl, Web Browsers
            <hr/>
          </div>
        </div>
      </div>
    )
  }
