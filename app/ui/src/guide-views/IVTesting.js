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
import TXPIGuidesHelp from '../guide-view-helpers/TXPIGuidesHelp';
import TISIGuidesHelp from '../guide-view-helpers/TISIGuidesHelp';
import TCIGuidesHelp from '../guide-view-helpers/TCIGuidesHelp';
import TCOIGuidesHelp from '../guide-view-helpers/TCOIGuidesHelp';
import TFSIGuidesHelp from '../guide-view-helpers/TFSIGuidesHelp';
import TIVGuidesHelp from '../guide-view-helpers/TIVGuidesHelp';
import THSSGuidesHelp from '../guide-view-helpers/THSSGuidesHelp';
import THIRGuidesHelp from '../guide-view-helpers/THIRGuidesHelp';
import THHIGuidesHelp from '../guide-view-helpers/THHIGuidesHelp';
import TSSTIGuidesHelp from '../guide-view-helpers/TSSTIGuidesHelp';
import TSSRFGuidesHelp from '../guide-view-helpers/TSSRFGuidesHelp';


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

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for XPath Injection</h5>
                <span className="wsId">WSTG-INPV-09</span><hr/>
                <h6>
                  XPath is a language that has been designed and developed primarily to address parts of an XML document. In XPath
                  injection testing, we test if it is possible to inject XPath syntax into a request interpreted by the application, allowing an
                  attacker to execute user-controlled XPath queries.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "XPath Injection Testing Help & Guide",
                        <TXPIGuidesHelp
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
                        "Report on XPath Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-09"
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
                <h5 className="mSubTitle">Testing for IMAP SMTP Injection</h5>
                <span className="wsId">WSTG-INPV-10</span><hr/>
                <h6>
                  This threat affects all applications that communicate with mail servers (IMAP/SMTP), generally webmail applications.
                  The aim of this test is to verify the capacity to inject arbitrary IMAP/SMTP commands into the mail servers, due to input
                  data not being properly sanitized.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "IMAP SMTP Injection Testing Help & Guide",
                        <TISIGuidesHelp
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
                        "Report on IMAP SMTP Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-10"
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
                <h5 className="mSubTitle">Testing for Code Injection (Local & Remote File Inclusion)</h5>
                <span className="wsId">WSTG-INPV-11</span><hr/>
                <h6>
                  Tester should check if it is possible to enter code as input on a web page and have it
                  executed by the web server. Test must test for both Local and Remote File Inclusion that may lead to execution of those files
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Code Injection Testing Help & Guide",
                        <TCIGuidesHelp
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
                        "Report on Code Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-11"
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
                <h5 className="mSubTitle">Testing for Command Injection</h5>
                <span className="wsId">WSTG-INPV-12</span><hr/>
                <h6>
                  The tester will try to inject an OS command through an HTTP request to the application
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Command Injection Testing Help & Guide",
                        <TCOIGuidesHelp
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
                        "Report on Command Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-12"
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
                <h5 className="mSubTitle">Testing for Format String Injection</h5>
                <span className="wsId">WSTG-INPV-13</span><hr/>
                <h6>
                  A format string is a null-terminated character sequence that also contains conversion specifiers interpreted or
                  converted at runtime. If server-side code concatenates a user’s input with a format string, an attacker can append
                  additional conversion specifiers to cause a runtime error, information disclosure, or buffer overflow.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Format String Injection Testing Help & Guide",
                        <TFSIGuidesHelp
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
                        "Report on Format String Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-13"
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
                <h5 className="mSubTitle">Testing for Incubated Vulnerability</h5>
                <span className="wsId">WSTG-INPV-14</span><hr/>
                <h6>
                  Also often referred to as persistent attacks, incubated testing is a complex testing method that needs more than one
                  data validation vulnerability to work. Incubated vulnerabilities are typically used to conduct “watering hole” attacks
                  against users of legitimate web applications.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Incubated Vulnerability Testing Help & Guide",
                        <TIVGuidesHelp
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
                        "Report on Incubated Vulnerability Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-14"
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
                <h5 className="mSubTitle">Testing for HTTP Splitting Smuggling</h5>
                <span className="wsId">WSTG-INPV-15</span><hr/>
                <h6>
                  Assess if the Web App is vulnerable to HTTP splitting and smuggling
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "HTTP Splitting Smuggling Testing Help & Guide",
                        <THSSGuidesHelp
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
                        "Report on HTTP Splitting Smuggling Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-15"
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
                <h5 className="mSubTitle">Testing for HTTP Incoming Requests</h5>
                <span className="wsId">WSTG-INPV-16</span><hr/>
                <h6>
                  Tester should monitor all incoming/outgoing HTTP requests on both client-side or server-side. The
                  purpose of this testing is to verify if there is unnecessary or suspicious HTTP request sending in the background
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "HTTP Incoming Requests Testing Help & Guide",
                        <THIRGuidesHelp
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
                        "Report on HTTP Incoming Requests Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-16"
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
                <h5 className="mSubTitle">Testing for Host Header Injection</h5>
                <span className="wsId">WSTG-INPV-17</span><hr/>
                <h6>
                  Assess if the Host header is being parsed dynamically in the application.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Host Header Injection Testing Help & Guide",
                        <THHIGuidesHelp
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
                        "Report on Host Header Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-17"
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
                <h5 className="mSubTitle">Testing for Server-side Template Injection</h5>
                <span className="wsId">WSTG-INPV-18</span><hr/>
                <h6>
                  Web applications commonly use server-side templating technologies (Jinja2, Twig, FreeMaker, etc.) to generate
                  dynamic HTML responses. Server-side Template Injection vulnerabilities (SSTI) occur when user input is embedded in
                  a template in an unsafe manner and results in remote code execution on the server.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Server-side Template Injection Testing Help & Guide",
                        <TSSTIGuidesHelp
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
                        "Report on Server-side Template Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-18"
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
                <h5 className="mSubTitle">Testing for Server-Side Request Forgery</h5>
                <span className="wsId">WSTG-INPV-19</span><hr/>
                <h6>
                  Identify SSRF injection points
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Server-Side Request Forgery Testing Help & Guide",
                        <TSSRFGuidesHelp
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
                        "Report on Server-Side Request Forgery Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-INPV-19"
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
