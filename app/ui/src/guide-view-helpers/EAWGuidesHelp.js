/**
  For Automatic Scan in Search Engine Discovery
  */

import React from 'react';

export default function RWMGuidesHelp(props){

  let viliop = props.viliop;
  let project = viliop.currentProject;


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="helpTitle">Intro:</h3>
          A paramount step in testing for web application vulnerabilities is to find out which particular applications are hosted on
          a web server. Many applications have known vulnerabilities and known attack strategies that can be exploited in order
          to gain remote control or to exploit data. In addition, many applications are often misconfigured or not updated, due to
          the perception that they are only used “internally” and therefore no threat exists. With the proliferation of virtual web
          servers, the traditional 1:1-type relationship between an IP address and a web server is losing much of its original
          significance. It is not uncommon to have multiple web sites or applications whose symbolic names resolve to the same
          IP address. This scenario is not limited to hosting environments, but also applies to ordinary corporate environments as
          well.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Check if webserver allows directory browsing, if yes then browse the directories to discover more
              applications hosted on the servers
            </li>
            <li>
              Probe for URLs which might be likely candidates for non-published applications
            </li>
            <li>
              Scan for all open ports and services that are run on them
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          DNS Lookup tools eg nslookup and dig, Search engines, Nmap, Nessus Vulnerability Scanner, Nikto
          <hr/>
        </div>
      </div>
    </div>
  )
}
