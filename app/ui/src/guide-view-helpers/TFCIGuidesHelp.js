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
          A CSS Injection vulnerability involves the ability to inject arbitrary CSS code in the context of a trusted web site which is
          rendered inside a victim’s browser. The impact of this type of vulnerability varies based on the supplied CSS payload. It
          may lead to cross site scripting or data exfiltration.
          <br/>
          This vulnerability occurs when the application allows user-supplied CSS to interfere with the application’s legitimate
          style sheets. Injecting code in the CSS context may provide an attacker with the ability to execute JavaScript in certain
          conditions, or to extract sensitive values using CSS selectors and functions able to generate HTTP requests. Generally,
          allowing users the ability to customize pages by supplying custom CSS files is a considerable risk
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify CSS injection points.
            </li>
            <li>
              Assess the impact of the injection.
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
