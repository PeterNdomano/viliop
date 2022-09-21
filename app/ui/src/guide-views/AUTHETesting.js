import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TCTECGuidesHelp from '../guide-view-helpers/TCTECGuidesHelp';
import TDCGuidesHelp from '../guide-view-helpers/TDCGuidesHelp';
import TWLOMGuidesHelp from '../guide-view-helpers/TWLOMGuidesHelp';
import TBASGuidesHelp from '../guide-view-helpers/TBASGuidesHelp';
import TVRPGuidesHelp from '../guide-view-helpers/TVRPGuidesHelp';
import TBCWGuidesHelp from '../guide-view-helpers/TBCWGuidesHelp';
import TWPPGuidesHelp from '../guide-view-helpers/TWPPGuidesHelp';


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
              <h3 className="mTitle">Authentication Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test Authentication mechanism(s) on <span className="linkText">{this.project.config.targetUrl}</span>
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Credentials Transported over an Encrypted Channel</h5>
                <span className="wsId">WSTG-ATHN-01</span><hr/>
                <h6>
                  Determine whether  this web app encrypts authentification data in transit.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Authentication Credentials Transport Channel Testing Help & Guide",
                        <TCTECGuidesHelp
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
                        "Report on Authentication Credentials Transport Channel Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHN-01"
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
                <h5 className="mSubTitle">Testing for Default Credentials</h5>
                <span className="wsId">WSTG-ATHN-02</span><hr/>
                <h6>
                  Nowadays web applications often make use of popular Open Source or commercial software that can be installed on
                  servers with minimal configuration or customization by the server administrator hence making chances of using default
                  credentials greater
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Default Credentials Testing Help & Guide",
                        <TDCGuidesHelp
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
                        "Report on Default Credentials Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHN-02"
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
                <h5 className="mSubTitle">Testing for Weak Lock Out Mechanism</h5>
                <span className="wsId">WSTG-ATHN-03</span><hr/>
                <h6>
                  Account lockout mechanisms are used to mitigate brute force attacks. At this stage
                  analyse those mechanisms and detect their weaknesses
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Weak Lock Out Mechanism Testing Help & Guide",
                        <TWLOMGuidesHelp
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
                        "Report on Weak Lock Out Mechanism Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHN-03"
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
                <h5 className="mSubTitle">Testing for Bypassing Authentication Schema</h5>
                <span className="wsId">WSTG-ATHN-04</span><hr/>
                <h6>
                  Testing the authentication schema means
                  understanding how the authentication process works and using that information to circumvent the authentication
                  mechanism
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Bypassing Authentication Schema Testing Help & Guide",
                        <TBASGuidesHelp
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
                        "Report on Bypassing Authentication Schema Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHN-04"
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
                <h5 className="mSubTitle">Testing for Vulnerable Remember Password</h5>
                <span className="wsId">WSTG-ATHN-05</span><hr/>
                <h6>
                  Credentials are the most widely used authentication technology. Due to such a wide usage of username-password
                  pairs, users are no longer able to properly handle their credentials across the multitude of used applications
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Vulnerable Remember Password Testing Help & Guide",
                        <TVRPGuidesHelp
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
                        "Report on Vulnerable Remember Password Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHN-05"
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
                <h5 className="mSubTitle">Testing for Browser Cache Weaknesses</h5>
                <span className="wsId">WSTG-ATHN-06</span><hr/>
                <h6>
                  Check that the application correctly instructs the browser to not retain sensitive data
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Browser Cache Weaknesses Testing Help & Guide",
                        <TBCWGuidesHelp
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
                        "Report on Browser Cache Weaknesses Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHN-06"
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
                <h5 className="mSubTitle">Testing for Weak Password Policy</h5>
                <span className="wsId">WSTG-ATHN-07</span><hr/>
                <h6>
                  The password
                  represents the keys to the kingdom, but is often subverted by users in the name of usability. In each of the recent high
                  profile hacks that have revealed user credentials, it is lamented that most common passwords are still: 123456 ,
                  password and qwerty
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Weak Password Policy Testing Help & Guide",
                        <TWPPGuidesHelp
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
                        "Report on Weak Password Policy Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHN-07"
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
