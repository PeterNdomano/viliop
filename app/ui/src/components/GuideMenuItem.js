import React, { Component } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default class GuideMenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      viewChanged: false,
    }
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState((prevState) => {
      return {
        viewChanged: !prevState.viewChanged
      }
    })
  }

  openView = () => {
    this.props.workspaceViewCallback(this.props.viewId);
  }

  render() {
    return (
      <div data-selected={(this.props.viewId === this.props.workspaceViewId) ? "true" : "false"} className="GuideMenuItem d-flex" onClick={() => this.openView()}>
        <h6 className="align-self-center w-100 mTitle">{this.props.title}</h6>
        <MdKeyboardArrowRight className="align-self-center mIcon"/>
      </div>
    )
  }
}
