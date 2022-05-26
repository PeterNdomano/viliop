import React, { Component } from 'react';
import { tellUser, sanitizePathString } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTitle: "Untitled",
      projectLocation: path.join(props.viliop.projectsFolder, "Untitled"),
    }
  }

  handleTitle = (projectTitle) => {
    projectTitle = sanitizePathString(projectTitle);
    let projectLocation = path.join(this.props.viliop.projectsFolder, projectTitle);
    this.setState({
      projectTitle,
      projectLocation,
    })
  }

  createProject = async (e) => {
    e.preventDefault();
    let title = this.state.projectTitle;
    let location = this.state.projectLocation;
    let type = ( document.getElementById('webPentest').checked === true ) ? "webPentest" : "mobilePentest";
    if(title.trim().length > 0) {
      if(!fs.existsSync(location)) {

      }
      else {
        tellUser("Project location already exists, try different project title")
      }
    }
    else {
      tellUser("Invalid project title");
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="panelTitle">Get Started</h1>
          </div>
          <div className="col-md-6">
            <form onSubmit={(e) => this.createProject(e)}>
              <div className="form-group row" style={{ padding:"15px" }}>
                <div className="col-6 form-check">
                  <input value="webPentest" className="form-check-input" type="radio" name="projectType" id="webPentest" defaultChecked/>
                  <label className="form-check-label" htmlFor="webPentest" >Website Pentesting</label>
                </div>
                <div className="col-6 form-check">
                  <input value="mobilePentest" className="form-check-input" type="radio" name="projectType" id="mobilePentest"/>
                  <label className="form-check-label" htmlFor="mobilePentest" >Mobile Pentesting</label>
                </div>
              </div>
              <div className="form-group">
                <label>Project Title</label>
                <input onChange={(e) => { this.handleTitle(e.target.value) }} value={this.state.projectTitle} id="projectTitle" className="form-control" />
              </div>
              <div className="form-group">
                <label>Project's Folder Location</label>
                <input readOnly={true} value={this.state.projectLocation} id="projectLocation" className="form-control" />
              </div>
              <div className="form-group text-right">
                <button className="btn btn-primary">
                  Create New Project
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6">
            <h3>Recent Projects</h3>
            <hr/>
            <div className="text-right">
              <button className="btn btn-primary">
                Open Project's Folder
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
