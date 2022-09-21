import React from 'react';
import NewProject from './views/NewProject';
import InfoGathering from './guide-views/InfoGathering';
import CNDMTesting from './guide-views/CNDMTesting';

export function getRPanelView (props) {
  if(props.navItem === "project" && props.navSubItem === "new_project"){
    return (
      <NewProject
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else{
    return (
      <div className="container">
        <h6>Error: no view specified</h6>
      </div>
    );
  }
}

export function getWorkspaceView(props) {
  if(props.workspaceViewId === "info_gathering"){
    return (
      <InfoGathering
        params={props}
      />
    )
  }
  else if(props.workspaceViewId === "config_testing"){
    return (
      <CNDMTesting
        params={props}
      />
    )
  }
  else{
    return (
      <h3>Select item</h3>
    )
  }
}
