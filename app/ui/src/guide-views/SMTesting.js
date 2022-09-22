import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TSMSGuidesHelp from '../guide-view-helpers/TSMSGuidesHelp';
import TCAGuidesHelp from '../guide-view-helpers/TCAGuidesHelp';
import TSFGuidesHelp from '../guide-view-helpers/TSFGuidesHelp';
import TESVGuidesHelp from '../guide-view-helpers/TESVGuidesHelp';
import TCSRFGuidesHelp from '../guide-view-helpers/TCSRFGuidesHelp';
import TLFGuidesHelp from '../guide-view-helpers/TLFGuidesHelp';
import TSTMGuidesHelp from '../guide-view-helpers/TSTMGuidesHelp';
import TSPGuidesHelp from '../guide-view-helpers/TSPGuidesHelp';


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

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Cross Site Request Forgery</h5>
                <span className="wsId">WSTG-SESS-05</span><hr/>
                <h6>
                  Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unintended actions on a web
                  application in which they are currently authenticated
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Cross Site Request Forgery Testing Help & Guide",
                        <TCSRFGuidesHelp
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
                        "Report on Cross Site Request Forgery Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-SESS-05"
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
                <h5 className="mSubTitle">Testing for Logout Functionality</h5>
                <span className="wsId">WSTG-SESS-06</span><hr/>
                <h6>
                  Session termination is an important part of the session lifecycle. Reducing to a minimum the lifetime of the session
                  tokens decreases the likelihood of a successful session hijacking attack
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Logout Functionality Testing Help & Guide",
                        <TLFGuidesHelp
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
                        "Report on Logout Functionality Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-SESS-06"
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
                <h5 className="mSubTitle">Testing Session Timeout</h5>
                <span className="wsId">WSTG-SESS-07</span><hr/>
                <h6>
                  In this phase testers check that the application automatically logs out a user when that user has been idle for a certain
                  amount of time, ensuring that it is not possible to “reuse” the same session and that no sensitive data remains stored in
                  the browser cache
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Session Timeout Testing Help & Guide",
                        <TSTMGuidesHelp
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
                        "Report on Session Timeout Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-SESS-07"
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
                <h5 className="mSubTitle">Testing for Session Puzzling</h5>
                <span className="wsId">WSTG-SESS-08</span><hr/>
                <h6>
                  Session Variable Overloading (also known as Session Puzzling) is an application level vulnerability which can enable
                  an attacker to perform a variety of malicious actions, including Bypass efficient authentication enforcement mechanisms, and impersonate legitimate users.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Session Puzzling Testing Help & Guide",
                        <TSPGuidesHelp
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
                        "Report on Session Puzzling Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-SESS-08"
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
