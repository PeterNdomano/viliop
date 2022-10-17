import React, { useState, useEffect } from 'react';
import OneTool from '../ones/OneTool';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default function AllTools(props) {
  const [ allTools, setAllTools ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ updateStatus, setUpdateStatus ] = useState(0);
  const [ toolsUpdability, setToolsUpdability ] = useState(0);

  const init = async () => {
    setLoading(true);
    await props.viliop.updateToolsIndex().then(async status => {
      setUpdateStatus(status);
      await props.viliop.checkToolsUpdability().then( async status => {
        setToolsUpdability(status);
        await props.viliop.getAllTools().then(tools => {
          setAllTools(tools);
          setLoading(false);
        });
      })
    })
  }

  const updateTools = async () => {
    setLoading(true)
    await props.viliop.updateTools().then(response => {
      setLoading(false);
      if(response.status === 1) {
        tellUser('Your tool pack was updated successfully', 'success');
        setToolsUpdability(0);
        init();
      }
      else {
        tellUser(response.msg);
        console.error(response.msg);
      }
    })
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="panelTitle">All Available Tools</h1>
        </div>
        {
          (loading) ?
          <div className="col-md-12" style={{ height:"100px", position:"relative" }}>
            {getInlineLoader()}
          </div> :
          <>
            <div className="col-md-12" style={{ marginBottom:"20px" }}>
              {
                (updateStatus === 1) ?
                <div className="text-left">
                  <h6 className="text-muted">Tools Index is up-to-date</h6>
                </div> :
                <div className="text-right">
                  <h6 className="text-muted text-left">Failed to update available tools index due to connection error, check your connection and click button below to retry</h6>
                  <button onClick={init} className="btn btn-warning text-dark btn-sm">Update Index</button>
                </div>
              }
            </div>
            <div className="col-md-12" style={{ marginBottom:"20px" }}>
              {
                (updateStatus === 1 && toolsUpdability === 1) ?
                <div className="text-left">
                  <h6 className="text-muted">Your tools pack needs to be updated. By updating your tools you'll have latest versions of all the tools listed below</h6>
                  <button onClick={updateTools} className="btn btn-warning btn-sm text-dark">Update Tools Pack</button>
                </div> :
                <div className="text-left">
                  <h6 className="text-muted">Tools Pack is up-to-date</h6>
                </div>
              }
            </div>
            <div className="col-md-12">
              {
                (allTools !== null && allTools.length > 0) ?
                allTools.map((item, i) => {
                  return <OneTool init={init} viliop={props.viliop} parent="all" setLoading={setLoading} tool={item} key={i}/>
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
