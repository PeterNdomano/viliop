import React from 'react';
import NewProject from './views/NewProject';
import InfoGathering from './guide-views/InfoGathering';
import CNDMTesting from './guide-views/CNDMTesting';
import IMTesting from './guide-views/IMTesting';

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
  else if(props.workspaceViewId === "identity_testing"){
    return (
      <IMTesting
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
