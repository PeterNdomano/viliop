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
          The application must ensure that only logically valid data can be entered at the front end as well as directly to the
          server-side of an application of system. Only verifying data locally may leave applications vulnerable to server
          injections through proxies or at handoffs with other systems. This is different from simply performing Boundary Value
          Analysis (BVA) in that it is more difficult and in most cases cannot be simply verified at the entry point, but usually
          requires checking some other system.
          <br/>
          Vulnerabilities related to business data validation is unique in that they are application specific and different from the
          vulnerabilities related to forging requests in that they are more concerned about logical data as opposed to simply
          breaking the business logic workflow.
          <br/>
          The front end and the back end of the application should be verifying and validating that the data it has, is using and is
          passing along is logically valid. Even if the user provides valid data to an application the business logic may make the
          application behave differently depending on data or circumstances
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify data injection points
            </li>
            <li>
              Validate that all checks are occurring on the back end and can’t be bypassed.
            </li>
            <li>
              Attempt to break the format of the expected data and analyze how the application is handling it.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP ZAP, Burp Suite
          <hr/>
        </div>
      </div>
    </div>
  )
}
