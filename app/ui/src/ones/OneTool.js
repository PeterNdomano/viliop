import React, { useState, useEffect } from 'react';
import ToolOpView from '../views/ToolOpView';
import { tellUser } from '../Helper';

export default function OneTool(props) {
  const [ tool, setTool ] = useState(props.tool);
  const [ isInstalled, setIsInstalled ] = useState(false);
  const [ installedVersion, setInstalledVersion ] = useState(null)


  const init = async () => {
    await props.viliop.isToolInstalled(tool.name).then(async response => {
      if(response.status === 1) {
        setIsInstalled(true);
        setInstalledVersion(response.installedVersion);
      }
      else {
        setIsInstalled(false);
      }
    })
  }



  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setTool(props.tool);
  }, [ props.tool ]);

  useEffect(() => {
    init()
  }, [ tool ]);

  return (
    <div className="OneTool">
      <h4>{tool.name}</h4>
      {(props.parent === 'all') ? <small className="text-muted form-text">Latest Version: {tool.version}</small> : ""}
      {(isInstalled) ? <small className="text-muted form-text">Installed Version: {installedVersion}</small> : <small className="text-danger form-text">Not Installed</small>}

      <h6 style={{ marginTop:"20px", marginBottom:"10px", fontSize:"14px !important" }} className="font-light">{tool.description}</h6>
      {
        (isInstalled) ?
        <div className="text-right">
          <button
            className="btn btn-sm btn-primary text-light font-regular"
            onClick={() => {
              props.params.modalCallback(
                true,
                tool.name,
                <ToolOpView
                  viliop={props.viliop}
                  tool={tool}
              />);
            }}
          >
            Launch
          </button>
        </div> :
        ""
      }
    </div>
  )
}
