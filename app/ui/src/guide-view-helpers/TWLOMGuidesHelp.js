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
          Account lockout mechanisms require a balance between protecting accounts from unauthorized access and protecting
          users from being denied authorized access. Accounts are typically locked after 3 to 5 unsuccessful attempts and can
          only be unlocked after a predetermined period of time, via a self-service unlock mechanism, or intervention by an
          administrator.
          <br/>
          Despite it being easy to conduct brute force attacks, the result of a successful attack is dangerous as the attacker will
          have full access on the user account and with it all the functionality and services they have access to
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Evaluate the account lockout mechanism’s ability to mitigate brute force password guessing
            </li>
            <li>
              Evaluate the unlock mechanism’s resistance to unauthorized account unlocking.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          HTTP Proxy, Web Browsers
          <hr/>
        </div>
      </div>
    </div>
  )
}
