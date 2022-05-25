import React, { Component, Fragment } from 'react';

export default class ToolbarMenu extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.body.addEventListener('click', (e) => {
      if(this.props.show === true) {
        let menu = document.getElementById('ToolbarMenu');
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
    })
  }

  render() {
    if(this.props.show === true) {
      return (
        <div
          className="ToolbarMenu z-depth-2"
          id="ToolbarMenu"
          style={{ left: this.props.left }}>

          <h4>oooooo</h4>
          <h4>iiiii</h4>
          <h4>bnmmn</h4>
          <h4>lkjfff</h4>
          <h4>oooooo</h4>
          <h4>iiiii</h4>
          <h4>bnmmn</h4>
          <h4>lkjfff</h4>
          <h4>oooooo</h4>
          <h4>iiiii</h4>
          <h4>bnmmn</h4>
          <h4>lkjfff</h4>
        </div>
      )
    }
    else {
      <div id="ToolbarMenu"></div>
    }
  }

}
