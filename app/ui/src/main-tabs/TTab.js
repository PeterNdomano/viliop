import React, { Component } from 'react';
import { MdPerson, MdOutlineFolderOpen, MdOutlineDashboard, MdNotes, MdOutlineSettings, MdOutlineMoreVert } from 'react-icons/md';
export default class TTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarMenuActive: props.toolbarMenuActive,
      navItem: props.navItem,
      navSubItem: props.navSubItem,
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      toolbarMenuActive: props.toolbarMenuActive,
      navItem: props.navItem,
      navSubItem: props.navSubItem,
    })
  }

  openToolbarMenu = (key) => {
    if(this.state.toolbarMenuActive === true) {
      this.props.toolbarMenuCallback(false);
    }
    else{
      let rect = document.getElementsByName(key)[0].getBoundingClientRect();
      this.props.toolbarMenuCallback(true, rect.x, key);
      this.setState((prevState) => {
        if(prevState.toolbarMenuActive === false){
          return ({
            toolbarMenuActive: true
          })
        }
      })
    }
  }

  toolbarMenuHover = (key) => {
    if(this.state.toolbarMenuActive === true){
      let rect = document.getElementsByName(key)[0].getBoundingClientRect();
      this.props.toolbarMenuCallback(true, rect.x, key);
      this.setState((prevState) => {
        if(prevState.toolbarMenuActive === false){
          return ({
            toolbarMenuActive: true
          })
        }
      })
    }
  }



  render() {
    return (
      <div className="TTab z-depth-1-half" id="tTab">
        <div className="container-fluid" style={{ height:"100%" }}>
          <div className="d-flex flex-row" style={{ height:"100%" }}>
            <div name="project" onMouseOver={() => this.toolbarMenuHover('project')} onClick={(e) => this.openToolbarMenu('project')}
              className={(this.state.navItem === "project") ? "menuItem align-self-center text-center z-depth-1-half menuItemSelected" : "menuItem align-self-center text-center"}>
              <MdOutlineFolderOpen className="mIcon"/>
              <p className="mTitle">Project</p>
            </div>
            <div name="tools" onMouseOver={() => this.toolbarMenuHover('tools')} onClick={(e) => this.openToolbarMenu('tools')}
              className={(this.state.navItem === "tools") ? "menuItem align-self-center text-center z-depth-1-half menuItemSelected" : "menuItem align-self-center text-center"}>
              <MdOutlineDashboard className="mIcon"/>
              <p className="mTitle">Tools</p>
            </div>
            <div name="reporting" onMouseOver={() => this.toolbarMenuHover('reporting')} onClick={(e) => this.openToolbarMenu('reporting')}
              className={(this.state.navItem === "reporting") ? "menuItem align-self-center text-center z-depth-1-half menuItemSelected" : "menuItem align-self-center text-center"}>
              <MdNotes className="mIcon"/>
              <p className="mTitle">Reporting</p>
            </div>
            <div name="settings" onMouseOver={() => this.toolbarMenuHover('settings')} onClick={(e) => this.openToolbarMenu('settings')}
              className={(this.state.navItem === "settings") ? "menuItem align-self-center text-center z-depth-1-half menuItemSelected" : "menuItem align-self-center text-center"}>
              <MdOutlineSettings className="mIcon"/>
              <p className="mTitle">Settings</p>
            </div>
            <div name="more" onMouseOver={() => this.toolbarMenuHover('more')} onClick={(e) => this.openToolbarMenu('more')}
              className={(this.state.navItem === "more") ? "menuItem align-self-center text-center z-depth-1-half menuItemSelected" : "menuItem align-self-center text-center"}>
              <MdOutlineMoreVert className="mIcon"/>
              <p className="mTitle">More</p>
            </div>
            <div className="headItem flex-grow-1 text-right">
              <h3 className="appTitle">Viliop_</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
