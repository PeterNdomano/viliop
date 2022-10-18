import React, { useState, useEffect } from 'react';
import OneTool from '../ones/OneTool';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default function InstalledTools(props) {
  const [ installedTools, setInstalledTools ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const init = async () => {
    setLoading(true);
    await props.viliop.getInstalledTools().then(tools => {
      setInstalledTools(tools);
      setLoading(false);
    });
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="panelTitle">Installed Tools</h1>
        </div>
        {
          (loading) ?
          <div className="col-md-12" style={{ height:"100px", position:"relative" }}>
            {getInlineLoader()}
          </div> :
          <>
            <div className="col-md-12">
              {
                (installedTools !== null && installedTools.length > 0) ?
                installedTools.map((item, i) => {
                  return <OneTool params={props.params} init={init} viliop={props.viliop} parent="installed" setLoading={setLoading} tool={item} key={i}/>
                }):
                <h6>No tools were found</h6>
              }
            </div>
          </>
        }
      </div>
    </div>
  )
}
