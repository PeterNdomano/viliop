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
import ExportProject from './views/ExportProject';
import InstalledTools from './views/InstalledTools';
import AllTools from './views/AllTools';
import ProxyExp from './views/ProxyExp';
import ConfigSetting from './views/ConfigSetting';
import AboutViliop from './views/AboutViliop';
import SupportViliop from './views/SupportViliop';
import ViliopLicence from './views/ViliopLicence';

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
  else if(props.navItem === "tools" && props.navSubItem === "installed_tools"){
    return (
      <InstalledTools
        params={props}
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else if(props.navItem === "tools" && props.navSubItem === "all_tools"){
    return (
      <AllTools
        params={props}
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else if(props.navItem === "project" && props.navSubItem === "export_project"){
    return (
      <ExportProject
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
  else if(props.navItem === "settings" && props.navSubItem === "viliop_config"){
    return (
      <ConfigSetting
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else if(props.navItem === "more" && props.navSubItem === "about_viliop"){
    return (
      <AboutViliop
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else if(props.navItem === "more" && props.navSubItem === "support_viliop"){
    return (
      <SupportViliop
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else if(props.navItem === "more" && props.navSubItem === "licence"){
    return (
      <ViliopLicence
        viliop={props.viliop}
        navCallback={props.navCallback}
      />
    )
  }
  else if(props.navItem === "proxy" && props.navSubItem.length > 0){
    return (
      <ProxyExp
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
    if(props.navItem === 'project' && props.navSubItem === 'current_project') {
      return (
        <InfoGathering
          params={props}
        />
      )
    }
    else {
      return (
        <div className="container">
          <h4 style={{ marginTop:"30px" }}>Please select an item from side panel</h4>
        </div>
      )
    }
  }
}
