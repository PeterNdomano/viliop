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
            While most of the files within a web server are directly handled by the server itself, it isn’t uncommon to find
            unreferenced or forgotten files that can be used to obtain important information about the infrastructure or the
            credentials.
            <br/>
            Most common scenarios include the presence of renamed old versions of modified files, inclusion files that are loaded
            into the language of choice and can be downloaded as source, or even automatic or manual backups in form of
            compressed archives. Backup files can also be generated automatically by the underlying file system the application is
            hosted on, a feature usually referred to as “snapshots”.
            <br/>
            All these files may grant the tester access to inner workings, back doors, administrative interfaces, or even credentials
            to connect to the administrative interface or the database server.
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                Words like <span className="codeText">old</span>, <span className="codeText">backup</span>
                may be added to file names by some developers.
              </li>
              <li>
                Find and analyse unreferenced files that might contain sensitive information.
              </li>
              <li>
                Inference from the Naming Scheme Used for Published Content
              </li>
            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            Nessus, Nikto2, wget, curl, SamSpade, Spike proxy, Xenu
            <hr/>
          </div>
        </div>
      </div>
    )
  }
