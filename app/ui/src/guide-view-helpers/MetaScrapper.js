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

  const startTool = () => {

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>
            Use Viliop's Built-in Metadata & Metafile Scrapper to collect metadata and metafiles of
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
              onClick={startTool}
            >
              {
                (loading) ? getInlineLoader() : "Launch Meta Scrapper"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
