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
          Browsers provide the following client-side storage mechanisms for developers to store and retrieve data:-<br/>
          1) Local Storage <br/>
          2) Session Storage <br/>
          3) IndexedDB <br/>
          4) Web SQL (Deprecated) <br/>
          5) Cookies <br/>
          These storage mechanisms can be viewed and edited using the browser’s developer tools, such as Google Chrome
          DevTools or Firefox’s Storage Inspector.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Determine whether the website is storing sensitive data in client-side storage
            </li>
            <li>
              The code handling of the storage objects should be examined for possibilities of injection attacks, such as utilizing
              unvalidated input or vulnerable libraries.
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
