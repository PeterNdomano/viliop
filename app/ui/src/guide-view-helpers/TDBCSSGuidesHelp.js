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
          DOM-based cross-site scripting is the de-facto name for XSS bugs that are the result of active browser-side content on
          a page, typically JavaScript, obtaining user input through a source and using it in a sink, leading to the execution of
          injected code.
          <br/>
          The DOM, or Document Object Model, is the structural format used to represent documents in a browser. The DOM
          enables dynamic scripts such as JavaScript to reference components of the document such as a form field or a session
          cookie. The DOM is also used by the browser for security - for example to limit scripts on different domains from
          obtaining session cookies for other domains. A DOM-based XSS vulnerability may occur when active content, such as
          a JavaScript function, is modified by a specially crafted request such that a DOM element that can be controlled by an
          attacker.
          Not all XSS bugs require the attacker to control the content returned from the server, but can instead abuse poor
          JavaScript coding practices to achieve the same results. The consequences are the same as a typical XSS flaw, only
          the means of delivery is differen
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify DOM sinks
            </li>
            <li>
              Build payloads that pertain to every sink type
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
