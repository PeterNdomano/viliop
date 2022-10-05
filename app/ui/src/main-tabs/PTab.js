import React, { Component } from 'react';
import GuideMenu from '../components/GuideMenu';

export default class PTab extends Component {
  constructor(props) {
    super(props);
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

  render() {
    if(this.props.viliop.currentProject !== null){
      return (
        <div className="PTab" id="pTab">
          <div className="container">
            <div style={{ borderBottom:"1px solid var(--faintDark)", width:"100%" }}>
              <h6 className="vilMinTitle">Project Title</h6>
              <p className="vilMinHeading">{this.props.viliop.currentProject.config.title}</p>
              <h6 className="vilMinTitle">Project Location</h6>
              <p className="vilMinHeading">{this.props.viliop.currentProject.configFile}</p>
              <h6 className="vilMinTitle">Project Type</h6>
              <p className="vilMinHeading">
                {(this.props.viliop.currentProject.config.type === "webPentest") ? "Website Pentesting" : "Mobile App Pentesting"}
              </p>
            </div>
            <GuideMenu
              viliop={this.props.viliop}
              navCallback={this.props.navCallback}
              workspaceViewId={this.props.workspaceViewId}
              workspaceViewCallback={this.props.workspaceViewCallback}
            />
          </div>
        </div>
      )
    }
    else{
      return (
        <div className="PTab" id="pTab">
          <h2>Welcome To Viliop</h2>
        </div>
      )
    }
  }
}
