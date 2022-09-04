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
            Proper configuration of the single elements that make up an application architecture is important in order to prevent
            mistakes that might compromise the security of the whole architecture.
            <br/>
            Configuration review and testing is a critical task in creating and maintaining an architecture. This is because many
            different systems will be usually provided with generic configurations that might not be suited to the task they will
            perform on the specific site they’re installed on.
            <br/>
            While the typical web and application server installation will contain a lot of functionality (like application examples,
            documentation, test pages) what is not essential should be removed before deployment to avoid post-install
            exploitation.
            <hr/>
          </div>
  
          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
                <li>
                    Check for defaults and known files & directories
                </li>
                <li>
                    Check for debugging code, comments or extensions that are left in the production environments
                </li>
                <li>
                    Review the logging mechanisms set in place for the applicatio
                </li>
            </ul>
            <hr/>
          </div>
  
          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            CUS-CAT Lite, Microsoft's Attack Surface Analyser, 
            <hr/>
          </div>
        </div>
      </div>
    )
  }
  