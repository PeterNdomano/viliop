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
          A format string is a null-terminated character sequence that also contains conversion specifiers interpreted or
          converted at runtime. If server-side code concatenates a user’s input with a format string, an attacker can append
          additional conversion specifiers to cause a runtime error, information disclosure, or buffer overflow.

          The worst case for format strings vulnerabilities occur in languages that don’t check arguments and also include a %n
          specifier that writes to memory. These functions, if exploited by an attacker modifying a format string, could cause
          information disclosure and code execution: C and C++ <span className="codeText">printf</span> and the like eg <span className="codeText">fprintf, snprintf</span>.
          Perl <span className="codeText">printf</span> and <span className="codeText">sprintf</span>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Assess whether injecting format string conversion specifiers into user-controlled fields causes undesired
              behaviour from the application.
            </li>
            <li>
              Tests include analysis of the code and injecting conversion specifiers as user input to the application under test.
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
