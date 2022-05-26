import React, { Component } from 'react';
import { getRPanelView } from '../ViewsResolver';

export default class RPanel extends Component {
  constructor(props) {
    super(props);
    this.view = <div></div>;
    this.state = {
      viewChange: false,
    }
  }

  componentDidMount() {
    this.handleDisplay(this.props)
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.handleDisplay(props)
  }

  handleDisplay = (props) => {
    if(props.navItem === "project" && props.navSubItem === "current_project") {
      document.getElementById('rPanel').style.left = "100vw"
    }
    else {
      //get view
      this.view = getRPanelView( props );
      this.setState((prevState) => {
        return {
          viewChange: !prevState.viewChange, //just to cause re-render
        }
      }, () => {
        document.getElementById('rPanel').style.left = "0";
        document.getElementById('rPanel').children[0].focus();
      })

    }
  }



  render() {
    return (
      <div className="RPanel" id="rPanel">
        {this.view}
      </div>
    )
  }
}
