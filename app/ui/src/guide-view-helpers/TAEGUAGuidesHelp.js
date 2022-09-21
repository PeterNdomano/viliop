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
          The scope of this test is to verify if it is possible to collect a set of valid usernames by interacting with the authentication
          mechanism of the application. This test will be useful for brute force testing, in which the tester verifies if, given a valid
          username, it is possible to find the corresponding password.
          <br/>
          Often, web applications reveal when a username exists on system, either as a consequence of mis-configuration or as
          a design decision. For example, sometimes, when we submit wrong credentials, we receive a message that states that
          either the username is present on the system or the provided password is wrong. The information obtained can be
          used by an attacker to gain a list of users on system. This information can be used to attack the web application, for
          example, through a brute force or default username and password attack.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Review processes that pertain to user identification (e.g. registration, login, etc.).
            </li>
            <li>
              Enumerate users where possible through response analysis
            </li>
            <li>
              Analyze the Error Code Received on Login Pages
            </li>
            <li>
              Analyze URLs and URLs Re-directions
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP ZAP, CURL, PERL
          <hr/>
        </div>
      </div>
    </div>
  )
}
