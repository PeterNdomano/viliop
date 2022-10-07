/**
  For Metadata and Meta files Scrapping
  */

import React, { useState } from 'react';
import { getInlineLoader, tellUser, processScanResult } from '../Helper';

export default function MetaScrapper(props) {
  let viliop = props.viliop;
  let project = viliop.currentProject;
  const [loading, setLoading] = useState(false);
  const [scanOutput, setScanOutput] = useState("");

  const startTool = async () => {
    if(!loading){
      setLoading(true);
      await viliop.metaScrap(project.config.targetUrl).then((result) => {
        if(result !== false) {
          let output = processScanResult(result);
          let view = output.scanData.map((item, i) => {
            return (
              <h6 className="scanOutput" key={i}>{item}</h6>
            )
          });
          setScanOutput(view)
          setLoading(false);
          tellUser('Completed, check results..', 'success');
        }
        else {
          //handle error
          tellUser("Scan Failed, make sure you are connected to the internet. Check log for more details");
          setLoading(false);
        }

      })
    }
    else {
      tellUser('Meta Scrapper is in progress, please wait..');
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>
            Use Viliop's Built-in Metadata & Metafile Scrapper (Meta-Scrapper) to collect metadata and metafiles of
            <span className="linkText"> {project.config.targetUrl}</span>
          </p>
          <hr/>
          <div className="text-left">
            {
              (scanOutput !== "")?
              <div>
                <h6 className="text-warning"><i>Meta Scrapper Results:</i></h6>
                {scanOutput}
              </div>
              :
              ""
            }

          </div>
          <div className="text-right">
            <button
              className="btn btn-warning text-dark"
              onClick={startTool}
            >
              {
                (loading) ? getInlineLoader() : "Start Meta Scrapper"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
