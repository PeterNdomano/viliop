import React, { Component, Fragment } from 'react';

export default class ContextMenu extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.body.addEventListener('click', (e) => {
      if(this.props.show === true) {
        let menu = document.getElementById('contextMenu');
        if(menu.contains(e.target)) {
          //activate the selected option or do nothing
        }
        else {
          //close contextMenu
          //this.props.contextMenuCallback(false);
        }
      }
    })
  }

  render() {
    if(this.props.show === true) {
      return (
        <div
          className="ContextMenu"
          id="contextMenu"
          style={{ top: this.props.top, left: this.props.left }}>

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
      <div id="contextMenu"></div>
    }
  }

}
