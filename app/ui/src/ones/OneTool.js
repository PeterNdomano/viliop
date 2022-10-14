import React, { useState, useEffect } from 'react';


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
      <small className="text-muted form-text">Latest Version: {tool.version}</small>
      {(isInstalled) ? <small className="text-muted form-text">Installed Version: {installedVersion}</small> : ""}

      <h6 style={{ marginTop:"20px", marginBottom:"10px", fontSize:"14px !important" }} className="font-light">{tool.description}</h6>

      <div className="text-right">
        {
          (props.parent === "all" && !isInstalled) ?
          <button className="btn btn-sm btn-dark">Install</button>:
          ""
        }

        {
          (isInstalled && Number(tool.version) > Number(installedVersion)) ?
          <button className="btn btn-sm btn-dark">Update</button>:
          ""
        }

        {
          (isInstalled) ?
          <button className="btn btn-sm btn-dark">Uninstall</button>:
          ""
        }
        
      </div>
    </div>
  )
}
