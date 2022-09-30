import React from 'react';
import NewProject from './views/NewProject';
import InfoGathering from './guide-views/InfoGathering';
import CNDMTesting from './guide-views/CNDMTesting';
import IMTesting from './guide-views/IMTesting';
import AUTHETesting from './guide-views/AUTHETesting';
import AUTHOTesting from './guide-views/AUTHOTesting';
import SMTesting from './guide-views/SMTesting';
import IVTesting from './guide-views/IVTesting';
import EHTesting from './guide-views/EHTesting';

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
  else if(props.workspaceViewId === "authentication_testing"){
    return (
      <AUTHETesting
        params={props}
      />
    )
  }
  else if(props.workspaceViewId === "authorization_testing"){
    return (
      <AUTHOTesting
        params={props}
      />
    )
  }
  else if(props.workspaceViewId === "session_testing"){
    return (
      <SMTesting
        params={props}
      />
    )
  }
  else if(props.workspaceViewId === "input_validation_testing"){
    return (
      <IVTesting
        params={props}
      />
    )
  }
  else if(props.workspaceViewId === "error_handling_testing"){
    return (
      <EHTesting
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
