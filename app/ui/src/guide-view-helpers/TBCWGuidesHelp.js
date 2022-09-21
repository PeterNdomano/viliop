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
          In this phase the tester checks that the application correctly instructs the browser to not retain sensitive data.
          <br/>
          Browsers can store information for purposes of caching and history. Caching is used to improve performance, so that
          previously displayed information doesn’t need to be downloaded again. History mechanisms are used for user
          convenience, so the user can see exactly what they saw at the time when the resource was retrieved. If sensitive
          information is displayed to the user (such as their address, credit card details, Social Security Number, or username),
          then this information could be stored for purposes of caching or history, and therefore retrievable through examining the
          browser’s cache or by simply pressing the browser’s Back button.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Review if the application stores sensitive information on the client-side.
            </li>
            <li>
              Review if access can occur without authorization.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP ZAP, Web Browsers
          <hr/>
        </div>
      </div>
    </div>
  )
}
