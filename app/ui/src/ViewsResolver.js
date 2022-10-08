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
import WCTesting from './guide-views/WCTesting';
import BLTesting from './guide-views/BLTesting';
import CSTesting from './guide-views/CSTesting';
import APITesting from './guide-views/APITesting';
import ViewReport from './views/ViewReport';
import EditReport from './views/EditReport';

export function getRPanelView (props) {
  if(props.navItem === "project" && props.navSubItem === "new_project"){
    return (
      <NewProject
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else if(props.navItem === "reporting" && props.navSubItem === "view"){
    return (
      <ViewReport
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else if(props.navItem === "reporting" && props.navSubItem === "export"){
    return (
      <ViewReport
        toExport={true}
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else if(props.navItem === "reporting" && props.navSubItem === "edit"){
    return (
      <EditReport
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
  else if(props.workspaceViewId === "cryptography_testing"){
    return (
      <WCTesting
        params={props}
      />
    )
  }
  else if(props.workspaceViewId === "business_logic_testing"){
    return (
      <BLTesting
        params={props}
      />
    )
  }
  else if(props.workspaceViewId === "clientside_testing"){
    return (
      <CSTesting
        params={props}
      />
    )
  }
  else if(props.workspaceViewId === "api_testing"){
    return (
      <APITesting
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
