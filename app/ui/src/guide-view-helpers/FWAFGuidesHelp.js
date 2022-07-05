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
          There is nothing new under the sun, and nearly every web application that one may think of developing has already
          been developed. With the vast number of free and Open Source software projects that are actively developed and
          deployed around the world, it is very likely that an application security test will face a target that is entirely or partly
          dependent on these well known applications or frameworks (e.g. WordPress, phpBB, Mediawiki, etc). Knowing the web
          application components that are being tested significantly helps in the testing process and will also drastically reduce
          the effort required during the test. These well known web applications have known HTML headers, cookies, and
          directory structures that can be enumerated to identify the application. Most of the web frameworks have several
          markers in those locations which help an attacker or tester to recognize them. This is basically what all automatic tools
          do, they look for a marker from a predefined location and then compare it to the database of known signatures. For
          better accuracy several markers are usually used
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Fingerprint the components being used by the web applications
            </li>
            <li>
              There are several common locations to consider in order to identify frameworks or components:
              <ol>
                <li>HTTP headers</li>
                <li>Cookies</li>
                <li>HTML source code</li>
                <li>Specific files and folders</li>
                <li>File extensions</li>
                <li>Error messages</li>
              </ol>
            </li>

          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          <ul>
            <li>
              WhatWeb <span className="linkText">https://github.com/urbanadventurer/WhatWeb</span>
            </li>
            <li>
              Wappalyzer <span className="linkText">https://www.wappalyzer.com/</span>
            </li>
          </ul>
          <hr/>
        </div>
      </div>
    </div>
  )
}
