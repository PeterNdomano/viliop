import React, { Component } from 'react';
import { tellUser, getInlineLoader } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTitle: "Untitled",
      targetUrl:"",
      projectLocation: path.join(props.viliop.projectsFolder, "Untitled"),
      projectType: 'webPentest',
      loading: false,
    }
  }

  handleTitle = ( projectTitle ) => {

    projectTitle = projectTitle.trim();
    if(projectTitle.length === 0) {
      let projectLocation = path.join(this.props.viliop.projectsFolder, "Untitled");
      this.setState({
        projectTitle,
        projectLocation,
      })
    }
    else {
      let regex = new RegExp("^[A-Za-z0-9?_-]+$");
      if(regex.test(projectTitle)) {
        let projectLocation = path.join(this.props.viliop.projectsFolder, projectTitle);
        this.setState({
          projectTitle,
          projectLocation,
        })
      }
      else {
        console.log('Invalid project title. Only Alphanumeric characters, dashes and underscores are allowed');
        tellUser('Invalid project title. Only Alphanumeric characters, dashes and underscores are allowed');
      }
    }

  }

  handleUrl = ( url ) => {
    url = url.trim();
    if(url.length === 0) {
      this.setState({
        targetUrl: url,
      })
    }
    else {
      if(url.indexOf('http://') === -1 && url.indexOf('https://') === -1 && url.indexOf('www.') === -1) {
        let regex = new RegExp("^[A-Za-z0-9?.:]+$");
        if(regex.test(url)) {
          this.setState({
            targetUrl: url,
          })
        }
        else {
          tellUser('Invalid domain name');
          console.log('Invalod domain name');
        }

      }
      else {
        console.log('Domain name should not contain http://, https://,  www or other prefixes');
        tellUser('Domain name should not contain http://, https://,  www or other prefixes');
      }
    }

  }

  createProject = async (e) => {
    if(!this.state.loading) {
      e.preventDefault();
      let title = this.state.projectTitle;
      let targetUrl = this.state.targetUrl;
      let location = this.state.projectLocation;
      let type = ( document.getElementById('webPentest').checked === true ) ? "webPentest" : "mobilePentest";
      if(targetUrl.trim().length > 0) {
        if(title.trim().length > 0) {
          if(!fs.existsSync(location)) {
            this.setState({ loading: true })
            await this.props.viliop.createNewProject({ title, targetUrl, location, type }).then((result) => {
              if(result === true) {
                this.setState({
                  projectTitle: "Untitled",
                  targetUrl: "",
                  projectLocation: path.join(this.props.viliop.projectsFolder, "Untitled"),
                  loading: false,
                })
                this.props.navCallback("project", "current_project");
                console.log('New Project - '+title+' was created')
                tellUser('New Project - '+title+' was created', "success");
              }
              else {
                tellUser('Could not create project');
                tellUser(result);
              }
            })
          }
          else {
            tellUser("Project location already exists, try different project title")
          }
        }
        else {
          tellUser("Invalid project title");
        }
      }
      else {
        tellUser('Invalid domain name');
      }
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
                  <input onChange={(e) => this.setState({ projectType: e.target.value })} value="webPentest" className="form-check-input" type="radio" name="projectType" id="webPentest" checked={(this.state.projectType === 'webPentest') ? true : false}/>
                  <label className="form-check-label" htmlFor="webPentest" >Website Pentesting</label>
                </div>
                <div className="col-6 form-check">
                  <input onChange={(e) => this.setState({ projectType: e.target.value })} value="mobilePentest" className="form-check-input" type="radio" name="projectType" id="mobilePentest" checked={(this.state.projectType === 'mobilePentest') ? true : false}/>
                  <label className="form-check-label" htmlFor="mobilePentest" >Mobile App Pentesting</label>
                </div>
              </div>
              {
                (this.state.projectType === 'webPentest') ?
                <>
                  <div className="form-group">
                    <label>Project Title</label>
                    <input onChange={(e) => { this.handleTitle(e.target.value) }} value={this.state.projectTitle} id="projectTitle" className="form-control" />
                    <small className="text-muted form-text">Only Alphanumeric characters, dashes and underscores</small>
                  </div>
                  <div className="form-group">
                    <label>Target Domain, Sub-Domain or IP Address</label>
                    <input onChange={(e) => { this.handleUrl(e.target.value) }} value={this.state.targetUrl} id="targetUrl" className="form-control" />
                    <small className="text-muted form-text">Eg <span className="font-mono text-accent"><i>sitename.com or subdomain.sitename.com</i></span>, no www, http://, or other prefixes</small>
                  </div>
                  <div className="form-group">
                    <label>Project's Folder Location</label>
                    <input readOnly={true} value={this.state.projectLocation} id="projectLocation" className="form-control" />
                    <small className="text-muted form-text">Change <span className="text-accent"><i>Project Title </i></span> to change this field </small>
                  </div>
                  <div className="form-group text-right">
                    <button className="btn btn-primary">
                      {(this.state.loading) ? getInlineLoader() : "Create New Project"}
                    </button>
                  </div>
                </>:
                <>
                  <div className="form-group">
                    <h3>Mobile App Pentesting will be supported soon. Subscribe to our newsletter for more updates</h3>
                  </div>
                </>
              }

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
