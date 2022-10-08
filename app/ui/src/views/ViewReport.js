import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
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
          await props.viliop.currentProject.getReport(item.id, true).then(content => {
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
            <h6 className="font-right text-muted">Project Type: &nbsp;<span className="text-success font-mono">{(this.props.viliop.currentProject.config.type === "webPentest") ? "Website Pentesting" : "Mobile App Pentesting"}</span></h6>
            <h6 className="font-right text-muted">Target:&nbsp; <span className="text-success font-mono">{this.props.viliop.currentProject.config.targetUrl}</span></h6>
            <h6 className="font-right text-muted">Pentester's Name:&nbsp; <span className="text-success font-mono">Peter Ndomano</span></h6>
            <h6 className="font-right text-muted">Pentester's Email:&nbsp; <span className="text-success font-mono">peterndomano@gmail.com</span></h6>
            <h6 className="font-right text-muted">Created/Updated on:&nbsp; <span className="text-success font-mono">{ new Date().toDateString() }</span></h6>
          </div>
          {
            (this.props.viliop.currentProject === null) ?
            <div className="col-md-12">
              <h6>You need to open or import project to use this part</h6>
            </div> :
            (this.state.ready) ?
            this.props.viliop.guide.menu.map((item, i) => {
              return (
                <div key={i} className="col-md-12" style={{ marginTop:"30px" }}>
                  <h2 className="font-light text-primary">{item.title}</h2>
                  <ol className="reportBlock">
                  {
                    item.sections.map((item, i) => {
                      return (
                        <li key={i} className="text-left" style={{ marginTop:"20px" }}>
                          <h5 className="font-bold text-success">{item.title}</h5>
                          <ReactMarkdown>{this.state.reportMds[item.id]}</ReactMarkdown>
                        </li>
                      )
                    })
                  }
                  </ol>
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
