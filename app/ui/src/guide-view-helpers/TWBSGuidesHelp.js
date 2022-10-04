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
          Traditionally, the HTTP protocol only allows one request/response per TCP connection. Asynchronous JavaScript and
          XML (AJAX) allows clients to send and receive data asynchronously (in the background without a page refresh) to the
          server, however, AJAX requires the client to initiate the requests and wait for the server responses (half-duplex).
          <br/>
          WebSockets allow the client or server to create a ‘full-duplex’ (two-way) communication channel, allowing the client
          and server to truly communicate asynchronously. WebSockets conduct their initial upgrade handshake over HTTP and
          from then on all communication is carried out over TCP channels by use of frames. For more, see the WebSocket
          Protocol
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify the usage of WebSockets.
            </li>
            <li>
              Assess its implementation by using the same tests on normal HTTP channels
            </li>


          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP - ZAP, Burp Suite, WebSocket Client, Google Chrome Simple WebSocket Client
          <hr/>
        </div>
      </div>
    </div>
  )
}
