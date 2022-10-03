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
          Forging requests is a method that attackers use to circumvent the front end GUI application to directly submit
          information for back end processing. The goal of the attacker is to send HTTP POST/GET requests through an
          intercepting proxy with data values that is not supported, guarded against or expected by the applications business
          logic. Some examples of forged requests include exploiting guessable or predictable parameters or expose “hidden”
          features and functionality such as enabling debugging or presenting special screens or windows that are very useful
          during development but may leak information or bypass the business logic.
          <br/>
          Vulnerabilities related to the ability to forge requests is unique to each application and different from business logic
          data validation in that it s focus is on breaking the business logic workflow
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Review the project documentation looking for guessable, predictable, or hidden functionality of fields
            </li>
            <li>
              Insert logically valid data in order to bypass normal business logic workflow.
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
