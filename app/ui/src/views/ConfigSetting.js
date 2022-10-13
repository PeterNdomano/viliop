import React, { Component } from 'react';
import ViliopInfo from './ViliopInfo';
import $ from 'jquery';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class ConfigSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configDefaults: null,
      loading: false,
    }
  }

  init = async (props) => {
    //get default config from main viliop model
    await props.viliop.getConfigDefaults().then(response => {
      if(response !== false) {
        this.setState({
          configDefaults: response,
        })
      }
    })
  }

  componentDidMount() {
    this.init(this.props);
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.init(props);
  }

  saveConfigs = async () => {
    if(!this.state.loading) {
      let email = $('#_userEmail').val().trim();
      let name = $('#_userName').val().trim();
      let pythonPath = $('#_pythonPath').val().trim();

      if(email.length > 0) {
        if(name.length > 0) {
          if(pythonPath.length > 0) {
            //validate python path
            this.setState({ loading: true });
            await this.props.viliop.pythonTest(pythonPath).then(async status => {
              if(status === 1) {
                await this.props.viliop.handleConfig({
                  user: {
                    name, email,
                  },
                  viliop: {
                    pythonPath,
                    toolsFolder: this.state.configDefaults.viliop.toolsFolder,
                    viliopVersion: this.state.configDefaults.viliop.viliopVersion
                  }
                }).then(async status => {
                  if(status === 1) {
                    tellUser('Configurations were saved', 'success');
                    //restart viliop
                    this.props.restartApp();
                  }
                  else {
                    this.setState({ loading: false });
                    tellUser('Could not save configurations, check log for more');
                  }
                })
              }
              else {
                this.setState({ loading: false });
                tellUser('Python3 was not found in the given path, please check your python path');
                console.log('Python3 was not found in the given path, please check your python path');
              }
            })

          }
          else {
            tellUser('Invalid python path');
          }
        }
        else {
          tellUser('Invalid name');
        }
      }
      else {
        tellUser('Invalid email address');
      }
    }

  }

  render() {
    return (
      <div className="container">
        <h1 className="font-light" style={{ marginTop:"calc(var(--tTabHeight) * 0.5)", marginBottom:"calc(var(--tTabHeight) * 0.5)" }}>Viliop Configuration</h1>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-success font-light">Environment <br/>Settings</h3>
            <div className="form-group">
              <label>Python 3 Executable Path</label>
              <input type="text" id="_pythonPath" defaultValue={(this.state.configDefaults) ? this.state.configDefaults.viliop.pythonPath : ""} className="form-control" />
              <small className="text-muted form-text">Location to python 3 executable</small>
            </div>
          </div>

          <div className="col-md-6">
            <h3 className="text-success font-light">User <br/>Settings</h3>
            <div className="form-group">
              <label>Your name</label>
              <input type="text" id="_userName" defaultValue={(this.state.configDefaults) ? this.state.configDefaults.user.name : ""} className="form-control" />
              <small className="text-muted form-text">This will appear on your reports</small>
            </div>
            <div className="form-group">
              <label>Your Email Address</label>
              <input type="text" id="_userEmail"  defaultValue={(this.state.configDefaults) ? this.state.configDefaults.user.email : ""} className="form-control" />
              <small className="text-muted form-text">This will appear on your reports</small>
            </div>
          </div>

          <div className="col-md-12 text-right" style={{ paddingBottom:"40px" }}>
            <button onClick={this.saveConfigs} className="btn btn-warning text-dark font-bold">
              {(this.state.loading) ? getInlineLoader("var(--darkColor)") : "SAVE CONFIGURATIONS"}
            </button>
          </div>

        </div>
      </div>
    )
  }
}
