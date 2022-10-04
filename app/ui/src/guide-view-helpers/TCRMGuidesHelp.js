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
          A client-side resource manipulation vulnerability is an input validation flaw. It occurs when an application accepts user-
          controlled input that specifies the path of a resource such as the source of an iframe, JavaScript, applet, or the handler
          of an XMLHttpRequest. This vulnerability consists of the ability to control the URLs that link to some resources present
          in a web page. The impact of this vulnerability varies, and it is usually adopted to conduct XSS attacks. This
          vulnerability makes it is possible to interfere with the expected application’s behavior by causing it to load and render
          malicious objects
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify sinks with weak input validation.
            </li>
            <li>
              Assess the impact of the resource manipulation
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
