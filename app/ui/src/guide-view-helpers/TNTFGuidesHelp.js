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
          Many of the problems that applications are solving require limits to the number of times a function can be used or action
          can be executed. Applications must be “smart enough” to not allow the user to exceed their limit on the use of these
          functions since in many cases each time the function is used the user may gain some type of benefit that must be
          accounted for to properly compensate the owner. For example: an eCommerce site may only allow a users apply a
          discount once per transaction, or some applications may be on a subscription plan and only allow users to download
          three complete documents monthly.
          <br/>
          Vulnerabilities related to testing for the function limits are application specific and misuse cases must be created that
          strive to exercise parts of the application/functions/ or actions more than the allowable number of times.
          <br/>
          Attackers may be able to circumvent the business logic and execute a function more times than “allowable” exploiting
          the application for personal gain
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify functions that must set limits to the times they can be called.
            </li>
            <li>
              Assess if there is a logical limit set on the functions and if it is properly validated.
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
