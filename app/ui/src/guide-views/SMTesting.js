import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TSMSGuidesHelp from '../guide-view-helpers/TSMSGuidesHelp';
import TCAGuidesHelp from '../guide-view-helpers/TCAGuidesHelp';
import TSFGuidesHelp from '../guide-view-helpers/TSFGuidesHelp';
import TESVGuidesHelp from '../guide-view-helpers/TESVGuidesHelp';


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
              <h3 className="mTitle">Session Management Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test session management on <span className="linkText">{this.project.config.targetUrl}</span>
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Session Management Schema</h5>
                <span className="wsId">WSTG-SESS-01</span><hr/>
                <h6>
                  In this test, the tester wants to check that cookies and other session tokens are created in a secure and unpredictable
                  way. An attacker who is able to predict and forge a weak cookie can easily hijack the sessions of legitimate users.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Session Management Schema Testing Help & Guide",
                        <TSMSGuidesHelp
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
                        "Report on Session Management Schema Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-SESS-01"
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
                <h5 className="mSubTitle">Testing for Cookies Attributes</h5>
                <span className="wsId">WSTG-SESS-02</span><hr/>
                <h6>
                  Web Cookies (herein referred to as cookies) are often a key attack vector for malicious users (typically targeting other
                  users) and the application should always take due diligence to protect cookies
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Cookies Attributes Testing Help & Guide",
                        <TCAGuidesHelp
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
                        "Report on Cookies Attributes Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-SESS-02"
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
                <h5 className="mSubTitle">Testing for Session Fixation</h5>
                <span className="wsId">WSTG-SESS-03</span><hr/>
                <h6>
                  In the generic exploit of session fixation vulnerabilities, an attacker can obtain a set of session cookies from the target
                  website without first authenticating
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Session Fixation Testing Help & Guide",
                        <TSFGuidesHelp
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
                        "Report on Session Fixation Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-SESS-03"
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
                <h5 className="mSubTitle">Testing for Exposed Session Variables</h5>
                <span className="wsId">WSTG-SESS-04</span><hr/>
                <h6>
                  The Session Tokens (Cookie, SessionID, Hidden Field), if exposed, will usually enable an attacker to impersonate a
                  victim and access the application illegitimately
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Exposed Session Variables Testing Help & Guide",
                        <TESVGuidesHelp
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
                        "Report on Exposed Session Variables Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-SESS-04"
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
