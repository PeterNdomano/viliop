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
          In this phase testers check that the application automatically logs out a user when that user has been idle for a certain
          amount of time, ensuring that it is not possible to “reuse” the same session and that no sensitive data remains stored in
          the browser cache.
          <br/>
          All applications should implement an idle or inactivity timeout for sessions. This timeout defines the amount of time a
          session will remain active in case there is no activity by the user, closing and invalidating the session upon the defined
          idle period since the last HTTP request received by the web application for a given session ID. The most appropriate
          timeout should be a balance between security (shorter timeout) and usability (longer timeout) and heavily depends on
          the sensitivity level of the data handled by the application. For example, a 60 minute log out time for a public forum can
          be acceptable, but such a long time would be too much in a home banking application (where a maximum timeout of
          15 minutes is recommended). In any case, any application that does not enforce a timeout-based log out should be
          considered not secure, unless such behavior is required by a specific functional requirement.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Validate that a hard session timeout exists
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browser, OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
