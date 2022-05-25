import React, { Component } from 'react';

export default class RPanel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.handleDisplay(this.props.navItem, this.props.navSubItem)
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.handleDisplay(props.navItem, props.navSubItem)
  }

  handleDisplay = (navItem, navSubItem) => {
    if(navItem !== "project") {
      document.getElementById('rPanel').style.left = "0vw"
    }
    else {
      document.getElementById('rPanel').style.left = "100vw"
    }
  }



  render() {
    return (
      <div className="RPanel" id="rPanel">
        <h3>get view then load it here</h3>
      </div>
    )
  }
}
