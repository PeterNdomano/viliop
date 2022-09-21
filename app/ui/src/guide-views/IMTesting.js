import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TRDGuidesHelp from '../guide-view-helpers/TRDGuidesHelp';
import TURPGuidesHelp from '../guide-view-helpers/TURPGuidesHelp';
import TAPPGuidesHelp from '../guide-view-helpers/TAPPGuidesHelp';
import TAEGUAGuidesHelp from '../guide-view-helpers/TAEGUAGuidesHelp';
import TWUUPGuidesHelp from '../guide-view-helpers/TWUUPGuidesHelp';


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
              <h3 className="mTitle">Identity Management Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test how user identities are managed on <span className="linkText">{this.project.config.targetUrl}</span>
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Test Role Definitions</h5>
                <span className="wsId">WSTG-IDNT-01</span><hr/>
                <h6>
                  Identify roles found on this target
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Role Definitions Testing Help & Guide",
                        <TRDGuidesHelp
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
                        "Report on Role Definitions Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-IDNT-01"
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
                <h5 className="mSubTitle">Test User Registration Process</h5>
                <span className="wsId">WSTG-IDNT-02</span><hr/>
                <h6>
                  Test the whole user registration process and determine how roles are assgned to users during the process
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "User Registration Process Testing Help & Guide",
                        <TURPGuidesHelp
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
                        "Report on User Registration Process Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-IDNT-02"
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
                <h5 className="mSubTitle">Test Account Provisioning Process</h5>
                <span className="wsId">WSTG-IDNT-03</span><hr/>
                <h6>
                  The provisioning of accounts presents an opportunity for an attacker to create a valid account without application of the
                  proper identification and authorization process
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Account Provisioning Process Testing Help & Guide",
                        <TAPPGuidesHelp
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
                        "Report on Account Provisioning Process Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-IDNT-03"
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
                <h5 className="mSubTitle">Testing for Account Enumeration and Guessable User Account</h5>
                <span className="wsId">WSTG-IDNT-04</span><hr/>
                <h6>
                  Test if it is possible to collect a set of valid usernames by interacting with the authentication
                  mechanism of the application
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Account Enumeration and Guessable User Account Testing Help & Guide",
                        <TAEGUAGuidesHelp
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
                        "Report on Account Enumeration and Guessable User Account Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-IDNT-04"
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
                <h5 className="mSubTitle">Testing for Weak or Unenforced Username Policy</h5>
                <span className="wsId">WSTG-IDNT-05</span><hr/>
                <h6>
                  User account names are often highly structured and valid account names can easily be guessed.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Weak or Unenforced Username Policy Testing Help & Guide",
                        <TWUUPGuidesHelp
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
                        "Report on Weak or Unenforced Username Policy Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-IDNT-05"
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
