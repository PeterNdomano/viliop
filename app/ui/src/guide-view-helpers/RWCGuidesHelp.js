/**
  For Automatic Scan in Search Engine Discovery
  */

import React from 'react';

export default function RWCGuidesHelp(props){

  let viliop = props.viliop;
  let project = viliop.currentProject;


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="helpTitle">Intro:</h3>
          It is very common, and even recommended, for programmers to include detailed comments and metadata on their
          source code. However, comments and metadata included into the HTML code might reveal internal information that
          should not be available to potential attackers. Comments and metadata review should be done in order to determine if
          any information is being leaked.
          For modern web apps, the use of client-Side JavaScript for the front-end is becoming more popular. Popular front-end
          construction technologies use client-side JavaScript like ReactJS, AngularJS, or Vue. Similar to the comments and
          metadata in HTML code, many programmers also hardcod sensitive information in JavaScript variables on the front-
          end. Sensitive information can include (but is not limited to): Private API Keys (e.g. an unrestricted Google Map API
          Key), internal IP addresses, sensitive routes (e.g. route to hidden admin pages or functionality), or even credentials.
          This sensitive information can be leaked from such front-end JavaScript code. A review should be done in order to
          determine if any sensitive information leaked which could be used by attackers for abuse
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Review webpage comments and metadata
            </li>
            <li>
              Identify javascript code and gather javascript files then analyze them for sensitive info
            </li>
            <li>
              Identify & analyze source map files
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Wget, Burp Suite,, Eyeballs, Browser 'view source' function, curl, Waybackurls, Google Maps API scanner
          <hr/>
        </div>
      </div>
    </div>
  )
}
