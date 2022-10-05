/**
  For Automatic Scan in Search Engine Discovery
  */

import React, { useState } from 'react';
import { getInlineLoader, tellUser, logData, processScanResult } from '../Helper';

export default function FWSAutoScan(props) {
  let viliop = props.viliop;
  let project = viliop.currentProject;
  const [loading, setLoading] = useState(false);
  const [scanOutput, setScanOutput] = useState("");

  let startFWS = async () => {
    if(!loading){
      setLoading(true);
      await viliop.fwsScan(project.config.targetUrl).then((result) => {
        let output = processScanResult(result);
        let view = output.scanData.map((item, i) => {
          return (
            <h6 className="scanOutput" key={i}>{item}</h6>
          )
        });
        setScanOutput(view)
        setLoading(false);
        tellUser('Scan was finished', 'success');
      }, (error) => {
        //handle error
        tellUser("Scan Failed, check log for more details");
        setLoading(false);
      })
    }
    else {
      tellUser('FWS Scan is in progress, please wait..');
    }
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
          <div className="text-left">
            {
              (scanOutput !== "")?
              <div>
                <h6 className="text-warning"><i>FWS Scan Results:</i></h6>
                {scanOutput}
              </div>
              :
              ""
            }

          </div>
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
