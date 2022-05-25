import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { tellUser } from './Helper';
import TTab from './main-tabs/TTab';
import PTab from './main-tabs/PTab';
import CTab from './main-tabs/CTab';
import WTab from './main-tabs/WTab';
import RPanel from './panels/RPanel';
import ContextMenu from './components/ContextMenu';
import ToolbarMenu from './components/ToolbarMenu';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contextMenuShow: false,
      contextMenuLeft: 0,
      contextMenuTop: 0,
      toolbarMenuShow: false,
      toolbarMenuLeft: 0,
      toolbarMenuKey: "",
      navItem: "project",
      navSubItem: null,
    }
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
    this.toolbarMenuCallback(false);
    this.setState({
      navItem: item,
      navSubItem: subItem,
    })

    //more nav fns to follow
  }

  render() {
    return (
      <div className="App">
        <ToastContainer/>
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
          navItem={this.state.navItem}
          navSubItem={this.state.navSubItem}
        />
        <PTab/>
        <WTab/>
        <CTab/>
      </div>
    )
  }
}
