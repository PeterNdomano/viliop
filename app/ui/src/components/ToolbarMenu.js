import React, { Component, Fragment } from 'react';
import { getProjectMenuOptions, getToolsMenuOptions } from '../Helper';

export default class ToolbarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarMenuKey: "",
    }
    this.menuOptions = [];
    this.optionsView = [];
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setMenuOptions(props.toolbarMenuKey)

  }

  componentDidMount() {
    this.setMenuOptions(this.props.toolbarMenuKey);
    document.body.addEventListener('click', e => this.handleOuterClicks(e))
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', e => this.handleOuterClicks(e));
  }

  setMenuOptions = (key) => {
    switch(key){
      case 'project':
        this.menuOptions = getProjectMenuOptions();
        break;
      case 'tools':
        this.menuOptions = getToolsMenuOptions();
        break;
      default:
        this.menuOptions = [];
        break;
    }
    this.optionsView = this.menuOptions.map((item, index) => {
      return (
        <div className="tbmItem" key={index} onClick={() => { this.props.navCallback( item.parent, item.id) }}>
          {item.title}
        </div>
      )
    })
    this.setState({
      toolbarMenuKey: key,
    });
  }

  handleOuterClicks = (e) => {
    if(this.props.show === true) {
      let menu = document.getElementById('ToolbarMenu');
      if(menu){
        if(menu.contains(e.target)) {
          //activate the selected option or do nothing
        }
        else {
          let menuClick = false;
          let menuItems = document.getElementsByClassName("menuItem");
          for(let i = 0; i < menuItems.length; i++){
            if(menuItems[i].contains(e.target)) {
              menuClick = true;
            }
          }

          if(!menuClick) {
            //close ToolbarMenu
            this.props.toolbarMenuCallback(false);
          }
        }
      }
    }
  }


  render() {
    if(this.props.show === true && this.state.toolbarMenuKey.length > 0) {
      return (
        <div
          className="ToolbarMenu z-depth-2"
          id="ToolbarMenu"
          style={{ left: this.props.left }}>
          {this.optionsView}
        </div>
      )
    }
    else {
      <div id="ToolbarMenu"></div>
    }
  }

}
