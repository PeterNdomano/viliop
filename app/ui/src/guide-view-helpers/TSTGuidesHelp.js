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
          A successful exploitation of this kind of vulnerability allows an adversary to claim and take control of the victim’s
          subdomain.
          <br/>
          If the subdomain takeover is successful a wide variety of attacks are possible (serving malicious content, phising,
          stealing user session cookies, credentials, etc.). This vulnerability could be exploited for a wide variety of DNS resource
          records including: A , CNAME , MX , NS , TXT etc. In terms of the attack severity an NS subdomain takeover (although
          less likely) has the highest impact because a successful attack could result in full control over the whole DNS zone and
          the victim’s domain.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Enumerate all possible sub domains (previous and current).
            </li>
            <li>
              Identify forgotten or misconfigured domains.
            </li>
            <li>
               Enumerate the victim DNS servers and resource records
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          dig - man page, recon-ng, theHarvester, Sublist3r, dnsrecon, OWASP Amass DNS enumeration
          <hr/>
        </div>
      </div>
    </div>
  )
}
