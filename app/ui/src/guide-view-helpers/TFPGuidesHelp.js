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
            When a resource is given a permissions setting that provides access to a wider range of actors than required, it could
            lead to the exposure of sensitive information, or the modification of that resource by unintended parties. This is
            especially dangerous when the resource is related to program configuration, execution, or sensitive user data.
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                Review and identify any rogue file permissions.
              </li>
              <li>
                In Linux, use <span className="codeText">ls</span> command to check the file permissions. Alternatively, <span className="codeText">namei</span> can also be used to recursively list file
                permissions.
              </li>
            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            Windows AccessEnum, Windows AccessChk, Linux namei
            <hr/>
          </div>
        </div>
      </div>
    )
  }
