import React, { Component } from 'react';
import SEDReport from '../guide-view-helpers/SEDReport';
import Reporter from '../guide-view-helpers/Reporter';
import SEDGuidesHelp from '../guide-view-helpers/SEDGuidesHelp';
import FWSGuidesHelp from '../guide-view-helpers/FWSGuidesHelp';
import RWMGuidesHelp from '../guide-view-helpers/RWMGuidesHelp';
import EAWGuidesHelp from '../guide-view-helpers/EAWGuidesHelp';
import RWCGuidesHelp from '../guide-view-helpers/RWCGuidesHelp';
import IAEPGuidesHelp from '../guide-view-helpers/IAEPGuidesHelp';
import MEPGuidesHelp from '../guide-view-helpers/MEPGuidesHelp';
import FWAFGuidesHelp from '../guide-view-helpers/FWAFGuidesHelp';
import MAAGuidesHelp from '../guide-view-helpers/MAAGuidesHelp';
import ToolsResolver from '../ToolsResolver';


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
                  Use search engines to discover sensitive information indexed and/or leaked from <span className="linkText">{this.project.config.targetUrl}</span>.
                </h6>
                <div className="text-right mBtnHolder">
                  <ToolsResolver
                    params={this.props.params}
                    viliop={this.props.params.viliop}
                    wstgId="WSTG-INFO-01" />
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
                  <ToolsResolver
                    params={this.props.params}
                    viliop={this.props.params.viliop}
                    wstgId="WSTG-INFO-02" />


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
                  Review various metadata files for information leakage of the web application’s hidden & sensitive path(s), or
                  functionality.
                </h6>
                <div className="text-right mBtnHolder">

                  <ToolsResolver
                    params={this.props.params}
                    viliop={this.props.params.viliop}
                    wstgId="WSTG-INFO-03" />

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

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Enumerate Applications on Webserver</h5>
                <span className="wsId">WSTG-INFO-04</span><hr/>
                <h6>
                  Discover other applications and services running on Web Server
                </h6>
                <div className="text-right mBtnHolder">
                  <ToolsResolver
                    params={this.props.params}
                    viliop={this.props.params.viliop}
                    wstgId="WSTG-INFO-04" />
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Enumerate Applications on Webserver Help & Guide",
                        <EAWGuidesHelp
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
                          ID="WSTG-INFO-04"
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
                <h5 className="mSubTitle">Review Webpage Content for Information Leakage</h5>
                <span className="wsId">WSTG-INFO-05</span><hr/>
                <h6>
                  Discover sensitive information from Webpage content
                </h6>
                <div className="text-right mBtnHolder">
                  <ToolsResolver
                    params={this.props.params}
                    viliop={this.props.params.viliop}
                    wstgId="WSTG-INFO-05" />
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Review Webpage Content for Information Leakage Help & Guide",
                        <RWCGuidesHelp
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
                        "Report on Review Webpage Content for Information Leakage",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INFO-05"
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
                <h5 className="mSubTitle">Identify Application Entry Points</h5>
                <span className="wsId">WSTG-INFO-06</span><hr/>
                <h6>
                  Discover various entry points to the target web app
                </h6>
                <div className="text-right mBtnHolder">
                  <ToolsResolver
                    params={this.props.params}
                    viliop={this.props.params.viliop}
                    wstgId="WSTG-INFO-06" />

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Identify Application Entry Points Help & Guide",
                        <IAEPGuidesHelp
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
                        "Report on Identification of Application Entry Points",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INFO-06"
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
                <h5 className="mSubTitle">Map Execution Paths Through Application</h5>
                <span className="wsId">WSTG-INFO-07</span><hr/>
                <h6>
                  Understand the structure of the application
                </h6>
                <div className="text-right mBtnHolder">

                  <ToolsResolver
                    params={this.props.params}
                    viliop={this.props.params.viliop}
                    wstgId="WSTG-INFO-07" />

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Mapping Execution Paths Help & Guide",
                        <MEPGuidesHelp
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
                        "Report on Mapping Execution Paths",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INFO-07"
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
                <h5 className="mSubTitle">Fingerprint Web Application Framework</h5>
                <span className="wsId">WSTG-INFO-08</span><hr/>
                <h6>
                  Discover the framework and technologies powering the target web app
                </h6>
                <div className="text-right mBtnHolder">
                  <ToolsResolver
                    params={this.props.params}
                    viliop={this.props.params.viliop}
                    wstgId="WSTG-INFO-08" />

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Fingerprinting Web Application Framework Help & Guide",
                        <FWAFGuidesHelp
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
                        "Report on Fingerprinting Web Application Framework",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INFO-08"
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
                <h5 className="mSubTitle">Map Application Architecture</h5>
                <span className="wsId">WSTG-INFO-10</span><hr/>
                <h6>
                  Generate a map of the application at hand based on the research conducted
                </h6>
                <div className="text-right mBtnHolder">
                  <ToolsResolver
                    params={this.props.params}
                    viliop={this.props.params.viliop}
                    wstgId="WSTG-INFO-10" />

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Mapping Application Architecture Help & Guide",
                        <MAAGuidesHelp
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
                        "Report on Mapping Application Architecture",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INFO-10"
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
