import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { tellUser, setupConsole } from './Helper';
import TTab from './main-tabs/TTab';
import PTab from './main-tabs/PTab';
import CTab from './main-tabs/CTab';
import WTab from './main-tabs/WTab';
import RPanel from './panels/RPanel';
import ContextMenu from './components/ContextMenu';
import ToolbarMenu from './components/ToolbarMenu';
import Viliop from './models/Viliop';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      viliopReady: false,
      contextMenuShow: false,
      contextMenuLeft: 0,
      contextMenuTop: 0,
      toolbarMenuShow: false,
      toolbarMenuLeft: 0,
      toolbarMenuKey: "",
      navItem: "project",
      navSubItem: "new_project",
      workspaceViewId: "ss",
    }
    this.viliop = new Viliop();
  }

  componentDidMount() {
    (
      async () => {
        await this.viliop.init().then((viliopStatus) => {
          if(viliopStatus === true) {
            this.setState({
              viliopReady: true
            }, () => {
              setupConsole();
              console.log("Welcome to Viliop");
            })
          }
          else {
            //viliop could not start
            //show error
            console.log(viliopStatus);
          }
        })
      }
    )();
  }

  contextMenuCallback = (show, top = 0, left = 0) => {
    this.setState({
      contextMenuShow: show,
      contextMenuTop: top,
      contextMenuLeft: left
    })
  }

  toolbarMenuCallback = (show, left = 0, key = "") => {
    this.setState({
      toolbarMenuShow: show,
      toolbarMenuLeft: left,
      toolbarMenuKey: key,
    })
  }

  navCallback = (item, subItem) => {
    if(this.viliop.currentProject === null){
      item = "project";
      subItem = "new_project";
    }
    this.toolbarMenuCallback(false);
    this.setState({
      navItem: item,
      navSubItem: subItem,
    })
    //more nav fns to follow
  }

  workspaceViewCallback = (viewId) => {
    this.setState({
      workspaceViewId: viewId,
    })
  }

  render() {
    //console.log("viewId:"+ this.state.workspaceViewId);
    if(this.state.viliopReady === true) {
      return (
        <div className="App">
          <ToastContainer
            theme="dark"
          />
          <ToolbarMenu
            navCallback={this.navCallback}
            toolbarMenuCallback={this.toolbarMenuCallback}
            toolbarMenuKey={this.state.toolbarMenuKey}
            show={this.state.toolbarMenuShow}
            left={this.state.toolbarMenuLeft} />
          <ContextMenu
            contextMenuCallback={this.contextMenuCallback}
            show={this.state.contextMenuShow}
            top={this.state.contextMenuTop}
            left={this.state.contextMenuLeft} />
          <TTab
            toolbarMenuActive={this.state.toolbarMenuShow}
            navItem={this.state.navItem}
            navSubItem={this.state.navSubItem}
            toolbarMenuCallback={this.toolbarMenuCallback}
            contextMenuCallback={this.contextMenuCallback}
          />
          <RPanel
            viliop={this.viliop}
            navItem={this.state.navItem}
            navSubItem={this.state.navSubItem}
            toolbarMenuCallback={this.toolbarMenuCallback}
            contextMenuCallback={this.contextMenuCallback}
            navCallback={this.navCallback}
          />
          <PTab
            viliop={this.viliop}
            navItem={this.state.navItem}
            navSubItem={this.state.navSubItem}
            toolbarMenuCallback={this.toolbarMenuCallback}
            contextMenuCallback={this.contextMenuCallback}
            navCallback={this.navCallback}
            workspaceViewId={this.state.workspaceViewId}
            workspaceViewCallback={this.workspaceViewCallback}
          />
          <WTab
            viliop={this.viliop}
            navItem={this.state.navItem}
            navSubItem={this.state.navSubItem}
            toolbarMenuCallback={this.toolbarMenuCallback}
            contextMenuCallback={this.contextMenuCallback}
            navCallback={this.navCallback}
            workspaceViewId={this.state.workspaceViewId}
            workspaceViewCallback={this.workspaceViewCallback}
          />
          <CTab
            viliop={this.viliop}
            navItem={this.state.navItem}
            navSubItem={this.state.navSubItem}
            toolbarMenuCallback={this.toolbarMenuCallback}
            contextMenuCallback={this.contextMenuCallback}
            navCallback={this.navCallback}
          />
        </div>
      )
    }
    else {
      return (
        <div>
          <h1>Please wait.....</h1>
          <h3>Viliop is starting.............</h3>
        </div>
      )
    }

  }
}
