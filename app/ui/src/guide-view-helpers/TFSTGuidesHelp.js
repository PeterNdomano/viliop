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
          Errors are usually seen as benign as they provide diagnostics data and messages that could help the user understand
          the problem at hand, or for the developer to debug that error.
          <br/>
          By trying to send unexpected data, or forcing the system into certain edge cases and scenarios, the system or
          application will most of the times give out a bit on what’s happening internally, unless the developers turned off all
          possible errors and return a certain custom message
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify existing error output.
            </li>
            <li>
              Analyze the different output returned
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web browsers, Web Developer Consoles
          <hr/>
        </div>
      </div>
    </div>
  )
}
