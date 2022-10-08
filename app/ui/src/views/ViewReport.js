import React, { Component } from 'react';
import { tellUser, sanitizePathString, getInlineLoader, sanitizeUrl } from '../Helper';
const path = window.require('path');
const fs = window.require('fs');


export default class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reportMds: {},
      ready: false,
    }
  }

  getReports = async (props) => {
    return new Promise(resolve => {
      props.viliop.guide.menu.forEach((item, i) => {
        item.sections.forEach(async (item, i) => {
          await props.viliop.currentProject.getReport(item.id).then(content => {
            this.setState((prevState) => {
              return {
                reportMds: {
                  ...prevState.reportMds,
                  [item.id]: content,
                }
              }
            })

          });
        });
      });

      resolve(true);
    })
  }

  init = async (props) => {
    await this.getReports(props).then(response => {
      if(response) {
        this.setState({
          ready: true,
        })
      }
    })
  }

  UNSAFE_componentWillReceiveProps(props) {
    this.init(props);
  }

  componentDidMount() {
    this.init(this.props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="panelTitle font-light">Pentesting Report</h1>
          </div>
          {
            (this.props.viliop.currentProject === null) ?
            <div className="col-md-12">
              <h6>You need to open or import project to use this part</h6>
            </div> :
            (this.state.ready) ?
            this.props.viliop.guide.menu.map((item, i) => {
              return (
                <div key={i} className="col-md-12" style={{ marginBottom:"20px" }}>
                  <h3>{item.title}</h3>
                  <blockquote className="reportBlock">
                  {
                    item.sections.map((item, i) => {
                      return (
                        <div key={i} className="text-left" style={{ marginBottom:"10px" }}>
                          <h5>{item.title}</h5>
                          {this.state.reportMds[item.id]}
                        </div>
                      )
                    })
                  }
                  </blockquote>
                </div>
              )
            })
            :
            <div className="col-md-12 text-center" style={{ position:"relative" }}>
            {getInlineLoader()}
            </div>
          }
        </div>
      </div>
    )
  }
}
