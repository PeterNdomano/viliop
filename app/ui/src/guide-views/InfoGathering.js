import React, { Component } from 'react';
import SEDReport from '../guide-view-helpers/SEDReport';
import Reporter from '../guide-view-helpers/Reporter';
import SEDGuidesHelp from '../guide-view-helpers/SEDGuidesHelp';
import FWSAutoScan from '../guide-view-helpers/FWSAutoScan';
import FWSGuidesHelp from '../guide-view-helpers/FWSGuidesHelp';


export default class InfoGathering extends Component {
  constructor(props) {
    super(props);
    this.project = props.params.viliop.currentProject;
    this.viliop = props.params.viliop;
  }

  render() {
    return (
      <div className="GuideView">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="mTitle">Information Gathering</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Collect sensitive information for this website from various sources on the Web that may lead to
                successful attack.
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Search Engine Discovery</h5>
                <span className="wsId">WSTG-INFO-01</span><hr/>
                <h6>
                  Use search engines to discover sensitive information indexed and/or leaked from {this.project.config.targetUrl}.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Search Engine Reconnaissance Help & Guide",
                        <SEDGuidesHelp
                          viliop={this.props.params.viliop}
                      />);
                    }}
                  >
                    Guides & Help
                  </button>

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Report on Search Engine Reconnaissance",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INFO-01"
                      />);
                    }}
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Fingerprint Web Server</h5>
                <span className="wsId">WSTG-INFO-02</span><hr/>
                <h6>
                  Identify the type and version of web server that <span className="linkText">{this.project.config.targetUrl}</span>
                  is running on. This is necessary because there are known vulnerabilities for various Webserver software and versions
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Automated Webserver Fingerprinting",
                        <FWSAutoScan
                          viliop={this.props.params.viliop}
                      />);
                    }}
                  >
                    Automated Scan
                  </button>

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Fingerprinting Web Server Help & Guide",
                        <FWSGuidesHelp
                          viliop={this.props.params.viliop}
                      />);
                    }}
                  >
                    Guides & Help
                  </button>

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Report on Fingerprinting Web Server",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INFO-02"
                      />);
                    }}
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Review Webserver Metafiles for Information Leakage</h5>
                <span className="wsId">WSTG-INFO-03</span><hr/>
                <h6>
                  Test various metadata files for information leakage of the web application’s path(s), or
                  functionality.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Webserver Metafiles Review Help & Guide",
                        <RWMGuidesHelp
                          viliop={this.props.params.viliop}
                      />);
                    }}
                  >
                    Guides & Help
                  </button>

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Report on Webserver Metafiles Review",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INFO-03"
                      />);
                    }}
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
