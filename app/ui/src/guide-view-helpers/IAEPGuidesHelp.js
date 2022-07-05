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
          Enumerating the application and its attack surface is a key precursor before any thorough testing can be undertaken,
          as it allows the tester to identify likely areas of weakness. This section aims to help identify and map out areas within
          the application that should be investigated once enumeration and mapping have been completed.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify possible entry and injection points through request and response analysis
            </li>
            <li>
              Understand how a normal user and browser would communicate with the web app
            </li>
            <li>
              Identify where GETs and POSTs are used
            </li>
            <li>
              Identify all parameters used in a POST request (these are in the body of the request).
            </li>
            <li>
              Within the POST request, pay special attention to any hidden parameters. When a POST is sent all the form fields
              (including hidden parameters) will be sent in the body of the HTTP message to the application. These typically
              aren’t seen unless a proxy or view the HTML source code is used. In addition, the next page shown, its data, and
              the level of access can all be different depending on the value of the hidden parameter(s)
            </li>
            <li>
              Identify all parameters used in a GET request (i.e., URL), in particular the query string (usually after a ? mark)
            </li>
            <li>
              Identify all the parameters of the query string. These usually are in a pair format, such as foo=bar . Also note that
              many parameters can be in one query string such as separated by a & , \~ , : , or any other special character or
              encoding.
            </li>
            <li>
              A special note when it comes to identifying multiple parameters in one string or within a POST request is that some
              or all of the parameters will be needed to execute the attacks. The tester needs to identify all of the parameters
              (even if encoded or encrypted) and identify which ones are processed by the application. Later sections of the
              guide will identify how to test these parameters. At this point, just make sure each one of them is identified
            </li>
            <li>
              Also pay attention to any additional or custom type headers not typically seen (such as debug: false ).
            </li>
            <li>
              Identify where new cookies are set ( Set-Cookie header), modified, or added to.
            </li>
            <li>
              Identify where there are any redirects (3xx HTTP status code), 400 status codes, in particular 403 Forbidden, and
              500 internal server errors during normal responses (i.e., unmodified requests).
            </li>
            <li>
              Also note where any interesting headers are used. For example, Server: BIG-IP indicates that the site is load
              balanced. Thus, if a site is load balanced and one server is incorrectly configured, then the tester might have to
              make multiple requests to access the vulnerable server, depending on the type of load balan
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          OWASP Zed Attack Proxy (ZAP), Burp SUite, Fiddler
          <hr/>
        </div>
      </div>
    </div>
  )
}
