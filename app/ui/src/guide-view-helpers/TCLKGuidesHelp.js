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
          Clickjacking, a subset of UI redressing, is a malicious technique whereby a web user is deceived into interacting (in
          most cases by clicking) with something other than what the user believes they are interacting with. This type of attack,
          either alone or in conjunction with other attacks, could potentially send unauthorized commands or reveal confidential
          information while the victim is interacting with seemingly-harmless web pages. The term clickjacking was coined by
          Jeremiah Grossman and Robert Hansen in 2008.
          <br/>
          A clickjacking attack uses seemingly-harmless features of HTML and JavaScript to force the victim to perform undesired
          actions, such as clicking an invisible button that performs an unintended operation. This is a client-side security issue
          that affects a variety of browsers and platforms.
          <br/>
          To carry out this attack, an attacker creates a seemingly-harmless web page that loads the target application through
          the use of an inline frame (concealed with CSS code). Once this is done, an attacker may induce the victim to interact
          with the web page by other means (through, for example, social engineering). Like other attacks, a common
          prerequisite is that the victim is authenticated against the attacker’s target website
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Understand security measures in place.
            </li>
            <li>
              Assess how strict the security measures are and if they are bypassable.
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
