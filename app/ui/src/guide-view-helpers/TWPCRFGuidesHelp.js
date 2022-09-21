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
          The password change and reset function of an application is a self-service password change or reset mechanism for
          users. This self-service mechanism allows users to quickly change or reset their password without an administrator
          intervening. When passwords are changed they are typically changed within the application. When passwords are
          reset they are either rendered within the application or emailed to the user. This may indicate that the passwords are
          stored in plain text or in a decryptable format.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Determine the resistance of the application to subversion of the account change process allowing someone to
              change the password of an account.
            </li>
            <li>
              Determine the resistance of the passwords reset functionality against guessing or bypassing.
            </li>
            <li>
              What information is required to reset the password?
            </li>
            <li>
              How are reset passwords communicated to the user?
            </li>
            <li>
              Are reset passwords generated randomly?
            </li>
            <li>
              Is the reset password functionality requesting confirmation before changing the password?
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
