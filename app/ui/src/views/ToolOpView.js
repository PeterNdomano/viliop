import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { getInlineLoader } from '../Helper';
const path = window.require('path');

export default function View(props) {

  const [ tool, setTool ] = useState(props.tool);
  const [ ready, setReady ] = useState(true);
  const [ loading, setLoading ] = useState(false);
  const [ toolOutput, setToolOutput ] = useState("");
  const [ toolParams, setToolParams ] = useState(props.tool.params);


  const init = () => {

  }

  const startTool = async () => {

  }

  const getParamValue = (param) => {

  }

  const handleToolParams = (input, param) => {
    setToolParams((oldParams) => {
      let newParams = [];

      oldParams.forEach((item, i) => {
        if(item.symbol === param.symbol) {
          //here get a new value for this param and push it to new params
          let value = null;
          if(param.type === "string") {
            value = input.value;
          }
          else if(param.type === "folderPath") {
            value = path.parse(input.files[0].path).dir;
          }
          else if(param.type === "file") {
            value = input.files[0];
          }
          else {
            value = input.value;
          }

          //set value and push at last
          item.value = value;
          newParams.push(item);
        }
        else {
          //just push it to new params
          newParams.push(item);
        }
      });

      return newParams;

    })

  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    setTool(props.tool);
    setToolParams(props.tool.params);
  }, [props.tool])

  useEffect(() => {
    init()
  }, [tool])

  return (
    (ready) ?
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <p>
            {tool.description}
          </p>

          <div className="text-left">
            {
              (tool.params.length > 0) ?
              tool.params.map((item, i) => {
                return (
                  <div className="form-group" key={i} style={{ maxWidth:"500px" }}>
                    <label><small className="text-muted">{item.description}&nbsp;<span className="text-warning">({item.symbol})</span></small></label>
                    {
                      (item.type === "string") ?
                      <input
                        readOnly={(props.viliop.currentProject !== null && item.symbol === "-u") ? true : false }
                        onChange={(e) => handleToolParams(e.target, item)}
                        defaultValue={(props.viliop.currentProject !== null && item.symbol === "-u") ? props.viliop.currentProject.config.targetUrl : "" }
                        type="text"
                        className="form-control"/> :
                      (item.type === "folderPath") ?
                      <>
                        <input
                          onChange={(e) => handleToolParams(e.target, item)}
                          type="file"
                          webkitdirectory="true"
                          directory="true"
                          id={i+"_"+item.symbol}
                          hidden={true}/>
                        <h5 className="font-mono">{getParamValue(item)}</h5>
                        <button
                          className="btn-dark btn-sm"
                          onClick={() => { $("#"+i+"_"+item.symbol).click() }}
                        >
                          Select Folder
                        </button>
                      </> :
                      (item.type === "file") ?
                      <input
                        onChange={(e) => handleToolParams(e.target, item)}
                        type="file"
                        className="form-control"/> :
                      <input
                        readOnly={(props.viliop.currentProject !== null && item.symbol === "-u") ? true : false }
                        onChange={(e) => handleToolParams(e.target, item)}
                        defaultValue={(props.viliop.currentProject !== null && item.symbol === "-u") ? props.viliop.currentProject.config.targetUrl : "" }
                        type={(item.type) ? item.type : "text"}
                        className="form-control"/>
                    }
                  </div>
                )
              }): ""
            }
          </div>
          <hr/>
          <div className="text-left">

            {
              (toolOutput !== "")?
              <div>
                <h6 className="text-warning"><i>Output:</i></h6>
                {toolOutput}
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
                (loading) ? getInlineLoader() : "Start"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
    :
    <div className="container" style={{ position:"relative", minHeight:"100px" }}>
      {getInlineLoader()}
    </div>
  )
}
