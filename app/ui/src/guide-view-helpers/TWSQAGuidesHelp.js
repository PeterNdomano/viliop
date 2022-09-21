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
          Often called “secret” questions and answers, security questions and answers are often used to recover forgotten
          passwords (see Testing for weak password change or reset functionalities, or as extra security on top of the password.
          <br/>
          They are typically generated upon account creation and require the user to select from some pre-generated questions
          and supply an appropriate answer. They may allow the user to generate their own question and answer pairs. Both
          methods are prone to insecurities.Ideally, security questions should generate answers that are only known by the user,
          and not guessable or discoverable by anybody else. This is harder than it sounds. Security questions and answers rely
          on the secrecy of the answer. Questions and answers should be chosen so that the answers are only known by the
          account holder. However, although a lot of answers may not be publicly known, most of the questions that websites
          implement promote answers that are pseudo-private
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Determine the complexity and how straight-forward the questions are
            </li>
            <li>
              Assess possible user answers and brute force capabilities
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
