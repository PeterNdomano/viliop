import React, { Component } from 'react';
import { getWorkspaceView } from '../ViewsResolver';

export default class WTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewChanged: false,
    }
    this.view = '';
  }

  componentDidMount(){
    this.handleDisplay(this.props);
  }

  UNSAFE_componentWillReceiveProps(props){
    this.handleDisplay(props);
  }

  handleDisplay = (props) => {
    this.view = getWorkspaceView(props);
    this.setState((prevState) => {
      return ({
        viewChanged: !prevState.viewChanged,
      })
    })
  }

  render() {
    return (
      <div className="WTab" id="wTab">
        {this.view}
      </div>
    )
  }
}
