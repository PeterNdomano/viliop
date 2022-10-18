import React, { useState, useEffect } from 'react';
import ToolOpView from './views/ToolOpView';

export default function ToolsResolver(props) {
  const [ wstgId, setWstgId ] = useState(props.wstgId);
  const [ tools, setTools ] = useState(null);

  const init = async () => {
    await props.viliop.getInstalledTools().then((installedTools) => {
      let compatibleTools = [];
      installedTools.forEach((item, i) => {
        if(item.wstgIds.indexOf(wstgId) > -1) {
          compatibleTools.push(item);
        }
      });

      if(compatibleTools.length > 0) {
        setTools(compatibleTools);
      }
    });
  }

  useState(() => {
    init();
  }, [])

  useState(() => {
    setWstgId(props.wstgId);
  }, [props.wstgId])

  useState(() => {
    init();
  }, [ wstgId ])

  return (
    (tools !== null) ?
    tools.map((item, i) => {
      return (
        <button
          key={i}
          className="btn btn-sm btn-success text-dark"
          onClick={() => {
            props.params.modalCallback(
              true,
              item.name,
              <ToolOpView
                viliop={props.viliop}
                tool={item}
            />);
          }}
        >
          Use {item.name}
        </button>
      )
    }) :
    <></>
  )
}
