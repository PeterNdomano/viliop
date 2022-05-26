import React from 'react';
import NewProject from './views/NewProject';

export function getRPanelView (navItem, navSubItem, viliop) {
  if(navItem === "project" && navSubItem === "new_project"){
    return (
      <NewProject
        viliop={viliop}
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
