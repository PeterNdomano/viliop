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
          Web servers usually give developers the ability to add small pieces of dynamic code inside static HTML pages, without
          having to deal with full-fledged server-side or client-side languages. This feature is provided by Server-Side
          Includes(SSI).
          <br/>
          Server-Side Includes are directives that the web server parses before serving the page to the user. They represent an
          alternative to writing CGI programs or embedding code using server-side scripting languages, when there’s only need
          to perform very simple tasks. Common SSI implementations provide directives (commands) to include external files, to
          set and print web server CGI environment variables, or to execute external CGI scripts or system commands.
          <br/>
          SSI can lead to a Remote Command Execution (RCE), however most webservers have the exec directive disabled by
          default.
          <br/>
          This is a vulnerability very similar to a classical scripting language injection vulnerability. One mitigation is that the web
          server needs to be configured to allow SSI. On the other hand, SSI injection vulnerabilities are often simpler to exploit,
          since SSI directives are easy to understand and, at the same time, quite powerful, e.g., they can output the content of
          files and execute system commands
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify SSI injection points.
            </li>
            <li>
              Assess the severity of the injection
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp Suite, OWASP ZAP, String searcher: grep
          <hr/>
        </div>
      </div>
    </div>
  )
}
