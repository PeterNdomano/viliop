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
          Many applications are designed to display different fields depending on the user of situation by leaving some inputs
          hidden. However, in many cases it is possible to submit values hidden field values to the server using a proxy. In these
          cases the server-side controls must be smart enough to perform relational or server-side edits to ensure that the proper
          data is allowed to the server based on user and application specific business logic.
          <br/>
          Additionally, the application must not depend on non-editable controls, drop-down menus or hidden fields for business
          logic processing because these fields remain non-editable only in the context of the browsers. Users may be able to
          edit their values using proxy editor tools and try to manipulate business logic. If the application exposes values related
          to business rules like quantity, etc. as non-editable fields it must maintain a copy on the server-side and use the same
          for business logic processing. Finally, aside application/system data, log systems must be secured to prevent read,
          writing and updating.
          <br/>
          Business logic integrity check vulnerabilities is unique in that these misuse cases are application specific and if users
          are able to make changes one should only be able to write or update/edit specific artifacts at specific times per the
          business process logic
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Review the project documentation for components of the system that move, store, or handle data.
            </li>
            <li>
              Determine what type of data is logically acceptable by the component and what types the system should guard
              against.
            </li>
            <li>
              Determine who should be allowed to modify or read that data in each component.
            </li>
            <li>
              Attempt to insert, update, or delete data values used by each component that should not be allowed per the
              business logic workflow.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp Suite, OWASP ZAP
          <hr/>
        </div>
      </div>
    </div>
  )
}
