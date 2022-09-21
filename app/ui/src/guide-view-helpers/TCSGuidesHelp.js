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
            Cloud storage services facilitate web application and services to store and access objects in the storage service.
            Improper access control configuration, however, may result in sensitive information exposure, data being tampered, or
            unauthorized access.
            <br/>

            A known example is where an Amazon S3 bucket is misconfigured, although the other cloud storage services may also
            be exposed to similar risks. By default, all S3 buckets are private and can be accessed only by users that are explicitly
            granted access. Users can grant public access to both the bucket itself and to individual objects stored within that
            bucket. This may lead to an unauthorized user being able to upload new files, modify or read stored files.
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tips & How:</h3>
            <ul>
              <li>
                Assess that the access control configuration for the storage services is properly in place.
              </li>
              <li>
                 identify the URL to access the data in the storage service, and then try to read the unauthorized data or upload a new arbitrary file
              </li>
            </ul>
            <hr/>
          </div>

          <div className="col-md-12">
            <h3 className="helpTitle">Tools:</h3>
            curl, AWS CLI
            <hr/>
          </div>
        </div>
      </div>
    )
  }
