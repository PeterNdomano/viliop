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
          Many web applications use and manage files as part of their daily operation. Using input validation methods that have
          not been well designed or deployed, an aggressor could exploit the system in order to read or write files that are not
          intended to be accessible. In particular situations, it could be possible to execute arbitrary code or system commands.
          <br/>
          Traditionally, web servers and web applications implement authentication mechanisms to control access to files and
          resources. Web servers try to confine users’ files inside a “root directory” or “web document root”, which represents a
          physical directory on the file system. Users have to consider this directory as the base directory into the hierarchical
          structure of the web application.
          <br/>
          The definition of the privileges is made using Access Control Lists (ACL) which identify which users or groups are
          supposed to be able to access, modify, or execute a specific file on the server. These mechanisms are designed to
          prevent malicious users from accessing sensitive files (for example, the common /etc/passwd file on a UNIX-like
          platform) or to avoid the execution of system commands.
          <br/>
          Many web applications use server-side scripts to include different kinds of files. It is quite common to use this method to
          manage images, templates, load static texts, and so on. Unfortunately, these applications expose security
          vulnerabilities if input parameters (i.e., form parameters, cookie values) are not correctly validated.
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tips & How:</h3>
          <ul>
            <li>
              Identify injection points that pertain to path traversal.
            </li>
            <li>
              Assess bypassing techniques and identify the extent of path traversal.
            </li>
          </ul>
          <hr/>
        </div>

        <div className="col-md-12">
          <h3 className="helpTitle">Tools:</h3>
          Burp Suite, OWASP ZAP, DotDotPwn, DirBuster 
          <hr/>
        </div>
      </div>
    </div>
  )
}
