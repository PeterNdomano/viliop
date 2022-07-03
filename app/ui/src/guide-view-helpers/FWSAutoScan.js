/**
  For Automatic Scan in Search Engine Discovery
  */

import React, { useState } from 'react';
import { getInlineLoader, tellUser } from '../Helper';

export default function FWSAutoScan(props) {
  let viliop = props.viliop;
  let project = viliop.currentProject;
  const [loading, setLoading] = useState(false);

  let startFWS = async () => {
    setLoading(true);
    await viliop.fwsScan(project.config.targetUrl).then((result) => {
      console.log(result);
      setLoading(false);
      tellUser('Scan was finished', 'success');
    }, (error) => {
      //handle error
      console.log(error);
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>
            Use Built-in Viliop FWS Scanner to get the identity of the webserver powering
            <span className="linkText"> {project.config.targetUrl}</span>
          </p>
          <hr/>
          <div className="text-right">
            <button
              className="btn btn-warning text-dark"
              onClick={startFWS}
            >
              {
                (loading) ? getInlineLoader() : "Scan With Viliop FWS"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
