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
          The most prevalent and most easily administered authentication mechanism is a static password. The password
          represents the keys to the kingdom, but is often subverted by users in the name of usability. In each of the recent high
          profile hacks that have revealed user credentials, it is lamented that most common passwords are still: 123456 ,
          password and qwerty
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Determine the resistance of the application against brute force password guessing using available password
              dictionaries by evaluating the length, complexity, reuse, and aging requirements of passwords
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Brute Force Attacks, Password dictionaries
          <hr/>
        </div>
      </div>
    </div>
  )
}
