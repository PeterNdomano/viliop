import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { getInlineLoader, tellUser, processToolOutput } from '../Helper';
const path = window.require('path');

export default function View(props) {

  const [ tool, setTool ] = useState(props.tool);
  const [ ready, setReady ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ toolOutput, setToolOutput ] = useState("");
  const [ toolParams, setToolParams ] = useState(props.tool.params);


  const init = async () => {
    //repair params
    await repairParams().then(() => {
      setToolOutput("");
      setReady(true);
    });

  }

  const checkParams = () => {
    return new Promise(resolve => {
      let status = true;
      toolParams.forEach((item, i) => {
        if(!item.optional) {
          if(!item.value) {
            status = false;
            tellUser("Please provide "+item.description);
          }
        }

      });
      resolve(status);

    })
  }

  const repairParams = () => {
    //this set the defaulted vaues mainly the -u param
    return new Promise(resolve => {
      setToolParams((oldParams) => {
        let newParams = [];

        oldParams.forEach((item, i) => {
          if(item.symbol === '-u' && props.viliop.currentProject !== null) {
            //here get a new value for this param and push it to new params
            //set value and push at last
            item.value = props.viliop.currentProject.config.targetUrl;
            newParams.push(item);
          }
          else {
            //just push it to new params
            newParams.push(item);
          }
        });

        return newParams;

      })
      resolve();
    })
  }

  const startTool = async () => {
    if(!loading){

      //check if all values are set
      let paramsOkay = await checkParams();
      if(paramsOkay) {
        setLoading(true);
        setToolOutput("");
        await props.viliop.runTool(tool, toolParams).then((result) => {
          if(result !== false) {
            let output = processToolOutput(result);
            let view = output.scanData.map((item, i) => {
              return (
                <h6 className="scanOutput text-muted" key={i}>{item}</h6>
              )
            });
            setToolOutput(view)
            setLoading(false);
            //tellUser('Task was completed, check output and/or Log for more details', 'success');
          }
          else {
            //handle error
            tellUser("Task could not be completed, check Log for more");
            setLoading(false);
          }

        })
      }
      else {
        //told user in check process
        //tellUser("please make sure all the required parameters are set");
      }
    }
    else {
      tellUser('Tool is running, please wait..');
    }
  }

  const getParamValue = (param) => {
    toolParams.forEach((item, i) => {
      if(item.symbol === param.symbol) {
        return item.value;
      }
    });
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
                        <h6 className="font-mono text-muted">{toolParams[i].value}</h6>
                        <button
                          style={{ margin:"0px" }}
                          className="btn btn-dark btn-sm"
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
              (toolOutput !== "") ?
              <div>
                <h6 className="text-warning"><i>OUTPUT:</i></h6>
                {toolOutput}
              </div>
              :
              (toolOutput === "" && loading) ?
              <div className="container" style={{ height:"60px", position: "relative" }}>
                {getInlineLoader()}
              </div> :
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
