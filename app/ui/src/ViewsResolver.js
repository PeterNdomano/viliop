import React from 'react';
import NewProject from './views/NewProject';

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
