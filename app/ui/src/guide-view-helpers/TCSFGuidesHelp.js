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
          ActionScript, based on ECMAScript, is the language used by Flash applications when dealing with interactive needs.
          There are three versions of the ActionScript language. ActionScript 1.0 and ActionScript 2.0 are very similar with
          ActionScript 2.0 being an extension of ActionScript 1.0. ActionScript 3.0, introduced with Flash Player 9, is a rewrite of
          the language to support object orientated design.
          <br/>
          ActionScript, like every other language, has some implementation patterns which could lead to security issues. In
          particular, since Flash applications are often embedded in browsers, vulnerabilities like DOM-based Cross Site
          Scripting (DOM XSS) could be present in flawed Flash applications.
          <br/>
          Cross-Site Flashing (XSF) is a vulnerability that has a similar impact to XSS.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Decompile and analyze the application’s code
            </li>
            <li>
              Assess sinks inputs and unsafe method usages.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Web Browsers, Adobe SWF Investigator, OWASP SWF Intruder, Decompiler - Flare, Disassembler - Flasm, Swfmill
          <hr/>
        </div>
      </div>
    </div>
  )
}
