import React, { useState, useEffect } from 'react';


export default function OneTool(props) {
  const [ tool, setTool ] = useState(props.tool);

  useEffect(() => {
    //..
  }, []);

  useEffect(() => {
    setTool(props.tool);
  }, [ props.tool ]);

  return (
    <div className="OneTool">
      {tool.name}
    </div>
  )
}
