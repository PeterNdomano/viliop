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
          Workflow vulnerabilities involve any type of vulnerability that allows the attacker to misuse an application/system in a
          way that will allow them to circumvent (not follow) the designed/intended workflow.
          <br/>
          The application’s business logic must require that the user complete specific steps in the correct/specific order and if
          the workflow is terminated without correctly completing, all actions and spawned actions are “rolled back” or canceled.
          Vulnerabilities related to the circumvention of workflows or bypassing the correct business logic workflow are unique in
          that they are very application/system specific and careful manual misuse cases must be developed using requirements
          and use cases.
          <br/>
          The applications business process must have checks to ensure that the user’s transactions/actions are proceeding in
          the correct/acceptable order and if a transaction triggers some sort of action, that action will be “rolled back” and
          removed if the transaction is not successfully completed
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Review the project documentation for methods to skip or go through steps in the application process in a different
              order from the intended business logic flow.
            </li>
            <li>
              Develop a misuse case and try to circumvent every logic flow identified
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          ..
          <hr/>
        </div>
      </div>
    </div>
  )
}
