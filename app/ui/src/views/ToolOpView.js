import React, { useState, useEffect } from 'react';
import { getInlineLoader } from '../Helper';

export default function View(props) {

  const [ tool, setTool ] = useState(props.tool);
  const [ ready, setReady ] = useState(true);
  const [ loading, setLoading ] = useState(false);
  const [ toolOutput, setToolOutput ] = useState("");


  const init = () => {

  }

  const startTool = async () => {

  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    setTool(props.tool);
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
                  <div className="form-group" key={i} style={{ maxWidth:"300px" }}>
                    <label>{item.description}</label>
                    {
                      (item.type === "string") ?
                      <input type="text" className="form-control"/> :
                      (item.type === "folderPath") ?
                      <input  className="form-control"/> :
                      (item.type === "file") ?
                      <input className="form-control"/> :
                      <input className="form-control"/>
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
