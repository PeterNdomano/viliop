import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TRCSSGuidesHelp from '../guide-view-helpers/TRCSSGuidesHelp';
import TSCSSGuidesHelp from '../guide-view-helpers/TSCSSGuidesHelp';
import THMGuidesHelp from '../guide-view-helpers/THMGuidesHelp';
import THPPGuidesHelp from '../guide-view-helpers/THPPGuidesHelp';
import TSIGuidesHelp from '../guide-view-helpers/TSIGuidesHelp';
import TLIGuidesHelp from '../guide-view-helpers/TLIGuidesHelp';
import TXIGuidesHelp from '../guide-view-helpers/TXIGuidesHelp';
import TSSSIGuidesHelp from '../guide-view-helpers/TSSSIGuidesHelp';

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
              <h3 className="mTitle">Input Validation Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test user input handling on <span className="linkText">{this.project.config.targetUrl}</span>
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Reflected Cross Site Scripting</h5>
                <span className="wsId">WSTG-INPV-01</span><hr/>
                <h6>
                  Reflected Cross-site Scripting (XSS) occur when an attacker injects browser executable code within a single HTTP
                  response. The injected attack is not stored within the application itself; it is non-persistent and only impacts users who
                  open a maliciously crafted link or third-party web page.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Reflected Cross Site Scripting Testing Help & Guide",
                        <TRCSSGuidesHelp
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
                        "Report on Reflected Cross Site Scripting Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-01"
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
                <h5 className="mSubTitle">Testing for Stored Cross Site Scripting</h5>
                <span className="wsId">WSTG-INPV-02</span><hr/>
                <h6>
                  Stored Cross-site Scripting (XSS) is the most dangerous type of Cross Site Scripting. Web applications that allow users
                  to store data are potentially exposed to this type of attack.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Stored Cross Site Scripting Testing Help & Guide",
                        <TSCSSGuidesHelp
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
                        "Report on Stored Cross Site Scripting Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-02"
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
                <h5 className="mSubTitle">Testing for HTTP Verb Tampering</h5>
                <span className="wsId">WSTG-INPV-03</span><hr/>
                <h6>
                  HTTP allows several other (and somewhat less known)
                  methods. Some of these can be used for nefarious purposes if the web server is misconfigured
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "HTTP Verb Tampering Testing Help & Guide",
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
                        "Report on HTTP Verb Tampering Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-03"
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
                <h5 className="mSubTitle">Testing for HTTP Parameter Pollution</h5>
                <span className="wsId">WSTG-INPV-04</span><hr/>
                <h6>
                  HTTP Parameter Pollution tests the applications response to receiving multiple HTTP parameters with the same name;
                  for example, if the parameter username is included in the GET or POST parameters twice
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "HTTP Parameter Pollution Testing Help & Guide",
                        <THPPGuidesHelp
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
                        "Report on HTTP Parameter Pollution Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-04"
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
                <h5 className="mSubTitle">Testing for SQL Injection</h5>
                <span className="wsId">WSTG-INPV-05</span><hr/>
                <h6>
                  SQL injection testing checks if it is possible to inject data into the application so that it executes a user-controlled SQL
                  query in the database.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "SQL Injection Testing Help & Guide",
                        <TSIGuidesHelp
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
                        "Report on SQL Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-05"
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
                <h5 className="mSubTitle">Testing for LDAP Injection</h5>
                <span className="wsId">WSTG-INPV-06</span><hr/>
                <h6>
                  The Lightweight Directory Access Protocol (LDAP) is used to store information about users, hosts, and many other
                  objects. LDAP injection is a server-side attack, which could allow sensitive information about users and hosts
                  represented in an LDAP structure to be disclosed, modified, or inserted.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "LDAP Injection Testing Help & Guide",
                        <TLIGuidesHelp
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
                        "Report on LDAP Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-06"
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
                <h5 className="mSubTitle">Testing for XML Injection</h5>
                <span className="wsId">WSTG-INPV-07</span><hr/>
                <h6>
                  XML Injection testing is when a tester tries to inject an XML doc to the application. If the XML parser fails to contextually
                  validate data, then the test will yield a positive result
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "XML Injection Testing Help & Guide",
                        <TXIGuidesHelp
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
                        "Report on XML Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-07"
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
                <h5 className="mSubTitle">Testing for SSI Injection</h5>
                <span className="wsId">WSTG-INPV-08</span><hr/>
                <h6>
                  Web servers usually give developers the ability to add small pieces of dynamic code inside static HTML pages, without
                  having to deal with full-fledged server-side or client-side languages. This feature is provided by Server-Side
                  Includes(SSI).
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "SSI Injection Testing Help & Guide",
                        <TSSSIGuidesHelp
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
                        "Report on SSI Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-08"
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
