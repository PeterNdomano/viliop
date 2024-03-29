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
import Modal from './components/Modal';
import StartupLoading from './views/StartupLoading';
import StartupError from './views/StartupError';
import StartupConfig from './views/StartupConfig';
import $ from 'jquery';
const { ipcRenderer } = window.require('electron');

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      viliopReady: false,
      runProxy: true,
      proxiedRequests: {},
      viliopStatus: -1,
      contextMenuShow: false,
      contextMenuLeft: 0,
      contextMenuTop: 0,
      toolbarMenuShow: false,
      toolbarMenuLeft: 0,
      toolbarMenuKey: "",
      navItem: "project",
      navSubItem: "new_project",
      workspaceViewId: "ss",
      showModal: false,
    }
    this.viliop = new Viliop();
    this.modal = "";
  }

  componentDidMount() {
    //set electron bridge
    this.setElectronAPI().then(() => {
      //then init
      this.init();
    })
  }



  setElectronAPI = () => {
    return new Promise((resolve) => {
      window.electronAPI = {
        openNewWindow: () => ipcRenderer.send('open-new-window'),
        closeApp: () => ipcRenderer.send('close-window'),
        minimizeApp: () => ipcRenderer.send('minimize-window'),
        maximizeApp: () => ipcRenderer.send('maximize-window'),
        getToolsPath: () => {
          return new Promise(async resolve => {
            await ipcRenderer.invoke('get-tools-path').then(response => {
              resolve(response)
            })
          })
        },

      }
      resolve(true);
    })
  }

  init = async () => {
    await this.viliop.init().then((viliopStatus) => {
      if(viliopStatus === 1) {
        this.setState({
          viliopReady: true,
          viliopStatus: 1,
        }, () => {
          console.log('Welcome to Viliop!');
        })
      }
      else if(viliopStatus === 2) {
        //show configuration view, app needs some cofig
        this.setState({
          viliopReady: false,
          viliopStatus: 2,
        }, () => {
          //...
        })
      }
      else {
        //viliop failed to start
        //show startup page error
        this.setState({
          viliopReady: false,
          viliopStatus: 0,
        }, () => {
          //...
        })
      }
    })
  }

  restartApp = () => {
    this.setState({
      viliopReady: false,
      viliopStatus: -1,
    }, () => {
      this.init();
    });
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
    //for nav items that require a project set
    let projectDepItems = [
      'project',
      'reporting',
    ];

    //for nav subitems that require a project set
    let projectDepSubitems = [
      'current_project',
      'export_project',
      'view',
      'edit',
      'export',
    ];

    if(this.viliop.currentProject === null && (projectDepItems.indexOf(item) > -1 && projectDepSubitems.indexOf(subItem) > -1)){
      item = "project";
      subItem = "new_project";
      console.log('Create or Open a project first');
      tellUser('Create or Open a project first');
    }

    //check if it's new window request
    if(item === 'project' && subItem === 'new_window') {
      //open new window from main process
      window.electronAPI.openNewWindow();
      if(this.viliop.currentProject === null) {
        item = "project";
        subItem = "new_project";

      }
      else {
        item = this.state.navItem;
        subItem = this.state.navSubItem;
      }
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

  clearModal = () => {
    //this clears modal content
    this.modal = (
      <Modal
        show={false}
        title=""
        view={<></>}
      />
    )
    this.setState({
      showModal: false,
    })
  }

  modalCallback = (show, title, view) => {
    if(show === true){
      this.modal = (
        <Modal
          show={true}
          title={title}
          view={view}
        />
      )
      this.setState({
        showModal: true,
      })
    }
    else{
      this.modal = "";
      this.setState({
        showModal: false,
      })
    }
  }

  render() {
    //console.log("viewId:"+ this.state.workspaceViewId);
    if(this.state.viliopReady === true) {
      return (
        <div className="App">
          {this.modal}

          <ToastContainer
            theme="dark"
          />
          <CTab
            viliop={this.viliop}
            navItem={this.state.navItem}
            navSubItem={this.state.navSubItem}
            toolbarMenuCallback={this.toolbarMenuCallback}
            contextMenuCallback={this.contextMenuCallback}
            navCallback={this.navCallback}
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
            modalCallback={this.modalCallback}
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
            modalCallback={this.modalCallback}
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
            modalCallback={this.modalCallback}
          />

        </div>
      )
    }
    else {
      if(this.state.viliopStatus === -1) {
        //loading
        return (
          <div className="App">
            {this.modal}
            <ToastContainer
              theme="dark"
            />
            <CTab
              viliop={this.viliop}
              navItem={this.state.navItem}
              navSubItem={this.state.navSubItem}
              toolbarMenuCallback={this.toolbarMenuCallback}
              contextMenuCallback={this.contextMenuCallback}
              navCallback={this.navCallback}
            />
            <StartupLoading
              viliop={this.viliop}
            />
          </div>
        )
      }
      else if(this.state.viliopStatus === 2) {
        //config screen
        return (
          <div className="App">
            {this.modal}
            <ToastContainer
              theme="dark"
            />
            <CTab
              viliop={this.viliop}
              navItem={this.state.navItem}
              navSubItem={this.state.navSubItem}
              toolbarMenuCallback={this.toolbarMenuCallback}
              contextMenuCallback={this.contextMenuCallback}
              navCallback={this.navCallback}
            />
            <StartupConfig
              restartApp={this.restartApp}
              viliop={this.viliop}
            />

          </div>
        )
      }
      else {
        //error occurred
        return (
          <div className="App">
            {this.modal}
            <ToastContainer
              theme="dark"
            />
            <CTab
              viliop={this.viliop}
              navItem={this.state.navItem}
              navSubItem={this.state.navSubItem}
              toolbarMenuCallback={this.toolbarMenuCallback}
              contextMenuCallback={this.contextMenuCallback}
              navCallback={this.navCallback}
            />
            <StartupError
              viliop={this.viliop}
            />
          </div>
        )
      }
    }

  }
}
