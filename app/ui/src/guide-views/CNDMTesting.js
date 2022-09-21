import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TNICGuidesHelp from '../guide-view-helpers/TNICGuidesHelp';
import TAPCGuidesHelp from '../guide-view-helpers/TAPCGuidesHelp';
import TFEHGuidesHelp from '../guide-view-helpers/TFEHGuidesHelp';
import ROBUFGuidesHelp from '../guide-view-helpers/ROBUFGuidesHelp';
import EIAAIGuidesHelp from '../guide-view-helpers/EIAAIGuidesHelp';
import THMGuidesHelp from '../guide-view-helpers/THMGuidesHelp';
import THSTSGuidesHelp from '../guide-view-helpers/THSTSGuidesHelp';
import TRCDPGuidesHelp from '../guide-view-helpers/TRCDPGuidesHelp';
import TFPGuidesHelp from '../guide-view-helpers/TFPGuidesHelp';


export default class CNDMTesting extends Component {
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
              <h3 className="mTitle">Configuration and Deployment Management Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test how various related components, services and networks are configured
                and deployed
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Test Network Infrastructure Configuration</h5>
                <span className="wsId">WSTG-CONF-01</span><hr/>
                <h6>
                  Review network configurations for applications, services, webservers and database servers
                  related to <span className="linkText">{this.project.config.targetUrl}</span>

                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Network Infrastructure Configuration Testing Help & Guide",
                        <TNICGuidesHelp
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
                        "Report on Network Infrastructure Configuration Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-01"
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
                <h5 className="mSubTitle">Test Application Platform Configuration</h5>
                <span className="wsId">WSTG-CONF-02</span><hr/>
                <h6>
                  Review configuration of every single element that make up the architecture
                  of <span className="linkText">{this.project.config.targetUrl}</span>

                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Application Platform Configuration Testing Help & Guide",
                        <TAPCGuidesHelp
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
                        "Report on Application Platform Configuration Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-02"
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
                <h5 className="mSubTitle">Test File Extensions Handling for Sensitive Information</h5>
                <span className="wsId">WSTG-CONF-03</span><hr/>
                <h6>
                  Test how webserver at <span className="linkText">{this.project.config.targetUrl}</span> Handles
                  different file extensions. Discover which file extensions return cleartext and which one are executed
                  on the server.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "File Extensions Handling Testing Help & Guide",
                        <TFEHGuidesHelp
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
                        "Report on File Extensions Handling Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-03"
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
                <h5 className="mSubTitle">Review Old Backup and Unreferenced Files for Sensitive Information</h5>
                <span className="wsId">WSTG-CONF-04</span><hr/>
                <h6>
                  While most of the files within a web server are directly handled by the server itself, it isn’t uncommon to find
                  unreferenced or forgotten files that can be used to obtain important information about the infrastructure or the
                  credentials.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Old Backup and Unreferenced Files Review Help & Guide",
                        <ROBUFGuidesHelp
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
                        "Report on Old Backup and Unreferenced Files Review",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-04"
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
                <h5 className="mSubTitle">Enumerate Infrastructure and Application Admin Interfaces</h5>
                <span className="wsId">WSTG-CONF-05</span><hr/>
                <h6>
                  Tests should be undertaken to reveal if and how Admin Interfaces
                  can be accessed by an unauthorized or standard user.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Infrastructure and Application Admin Interfaces Enumeration Help & Guide",
                        <EIAAIGuidesHelp
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
                        "Report on Infrastructure and Application Admin Interfaces Enumeration",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-05"
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
                <h5 className="mSubTitle">Test HTTP Methods</h5>
                <span className="wsId">WSTG-CONF-06</span><hr/>
                <h6>
                  Some of HTTP Methods can be used for nefarious purposes if the web server is misconfigured
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "HTTP Methods Testing Help & Guide",
                        <THMGuidesHelp
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
                        "Report on HTTP Methods Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-06"
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
                <h5 className="mSubTitle">Test HTTP Strict Transport Security</h5>
                <span className="wsId">WSTG-CONF-07</span><hr/>
                <h6>
                  Determine if the web uses HTTP Strict Transport Security (HSTS) feature to enforce https on some domains
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "HTTP Strict Transport Security Testing Help & Guide",
                        <THSTSGuidesHelp
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
                        "Report on HTTP Strict Transport Security Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-07"
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
                <h5 className="mSubTitle">Test RIA Cross Domain Policy</h5>
                <span className="wsId">WSTG-CONF-08</span><hr/>
                <h6>
                  Cross Domain Policies Can be abused in number of ways when misconfigured.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "RIA Cross Domain Policy Testing Help & Guide",
                        <TRCDPGuidesHelp
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
                        "Report on RIA Cross Domain Policy Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-08"
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
                <h5 className="mSubTitle">Test File Permission</h5>
                <span className="wsId">WSTG-CONF-09</span><hr/>
                <h6>
                  When a resource is given a permissions setting that provides access to a wider range of actors than required, it could
                  lead to the exposure of sensitive information, or the modification of that resource by unintended parties
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "File Permission Testing Help & Guide",
                        <TFPGuidesHelp
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
                        "Report on File Permission Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CONF-09"
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
