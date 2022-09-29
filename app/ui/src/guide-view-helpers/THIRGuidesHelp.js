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
          Tester should monitor all incoming/outgoing HTTP requests on both client-side or server-side. The
          purpose of this testing is to verify if there is unnecessary or suspicious HTTP request sending in the background.
          <br/>
          Most of Web security testing tools (i.e. AppScan, BurpSuite, ZAP) act as HTTP Proxy. This will require changes of proxy
          on client-side application or browser. The testing techniques listed below is primary focused on how we can monitor
          HTTP requests without changes of client-side which will be more close to production usage scenario.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Monitor all incoming and outgoing HTTP requests to the Web Server to inspect any suspicious requests
            </li>
            <li>
              Monitor HTTP traffic without changes of end user Browser proxy or client-side application.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Fiddler, TCPProxy, Charles Web Debugging Proxy, Wireshark, PowerEdit-Pcap, pcapteller, replayproxy, Ostinato
          <hr/>
        </div>
      </div>
    </div>
  )
}
