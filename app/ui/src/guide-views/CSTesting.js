import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TDBCSSGuidesHelp from '../guide-view-helpers/TDBCSSGuidesHelp';
import TJEGuidesHelp from '../guide-view-helpers/TJEGuidesHelp';
import THIGuidesHelp from '../guide-view-helpers/THIGuidesHelp';
import TCURLGuidesHelp from '../guide-view-helpers/TCURLGuidesHelp';
import TFCIGuidesHelp from '../guide-view-helpers/TFCIGuidesHelp';
import TCRMGuidesHelp from '../guide-view-helpers/TCRMGuidesHelp';
import TCORSGuidesHelp from '../guide-view-helpers/TCORSGuidesHelp';
import TCSFGuidesHelp from '../guide-view-helpers/TCSFGuidesHelp';
import TCLKGuidesHelp from '../guide-view-helpers/TCLKGuidesHelp';
import TWBSGuidesHelp from '../guide-view-helpers/TWBSGuidesHelp';
import TWMGGuidesHelp from '../guide-view-helpers/TWMGGuidesHelp';
import TBSTGuidesHelp from '../guide-view-helpers/TBSTGuidesHelp';
import TCSSIGuidesHelp from '../guide-view-helpers/TCSSIGuidesHelp';


export default class WCTesting extends Component {
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
              <h3 className="mTitle">Client-Side Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test the front-end of this web app for vulnerabilities
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for DOM-Based Cross Site Scripting</h5>
                <span className="wsId">WSTG-CLNT-01</span><hr/>
                <h6>
                  DOM-based cross-site scripting is the de-facto name for XSS bugs that are the result of active browser-side content on
                  a page, typically JavaScript, obtaining user input through a source and using it in a sink, leading to the execution of
                  injected code.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "DOM-Based Cross Site Scripting Testing Help & Guide",
                        <TDBCSSGuidesHelp
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
                        "Report on DOM-Based Cross Site Scripting Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-01"
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
                <h5 className="mSubTitle">Testing for JavaScript Execution</h5>
                <span className="wsId">WSTG-CLNT-02</span><hr/>
                <h6>
                  A JavaScript injection vulnerability is a subtype of cross site scripting (XSS) that involves the ability to inject arbitrary
                  JavaScript code that is executed by the application inside the victim’s browser
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "JavaScript Execution Testing Help & Guide",
                        <TJEGuidesHelp
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
                        "Report on JavaScript Execution Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-02"
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
                <h5 className="mSubTitle">Testing for HTML Injection</h5>
                <span className="wsId">WSTG-CLNT-03</span><hr/>
                <h6>
                  HTML injection is a type of injection vulnerability that occurs when a user is able to control an input point and is able to
                  inject arbitrary HTML code into a vulnerable web page
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "HTML Injection Testing Help & Guide",
                        <THIGuidesHelp
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
                        "Report on HTML Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-03"
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
                <h5 className="mSubTitle">Testing for Client-side URL Redirect</h5>
                <span className="wsId">WSTG-CLNT-04</span><hr/>
                <h6>
                  Also known as open redirection. It is an input
                  validation flaw that exists when an application accepts user-controlled input that specifies a link which leads to an
                  external URL that could be malicious. This kind of vulnerability could be used to accomplish a phishing attack or
                  redirect a victim to an infection page.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Client-side URL Redirect Testing Help & Guide",
                        <TCURLGuidesHelp
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
                        "Report on Client-side URL Redirect Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-04"
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
                <h5 className="mSubTitle">Testing for CSS Injection</h5>
                <span className="wsId">WSTG-CLNT-05</span><hr/>
                <h6>
                  A CSS Injection vulnerability involves the ability to inject arbitrary CSS code in the context of a trusted web site which is
                  rendered inside a victim’s browser. The impact of this type of vulnerability varies based on the supplied CSS payload. It
                  may lead to cross site scripting or data exfiltration.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "CSS Injection Testing Help & Guide",
                        <TFCIGuidesHelp
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
                        "Report on CSS Injection Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-05"
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
                <h5 className="mSubTitle">Testing for Client-side Resource Manipulation</h5>
                <span className="wsId">WSTG-CLNT-06</span><hr/>
                <h6>
                  A client-side resource manipulation vulnerability is an input validation flaw. It occurs when an application accepts user-
                  controlled input that specifies the path of a resource such as the source of an iframe, JavaScript, applet, or the handler
                  of an XMLHttpRequest
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Client-side Resource Manipulation Testing Help & Guide",
                        <TCRMGuidesHelp
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
                        "Report on Client-side Resource Manipulation Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-06"
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
                <h5 className="mSubTitle">Testing Cross Origin Resource Sharing</h5>
                <span className="wsId">WSTG-CLNT-07</span><hr/>
                <h6>
                  Identify endpoints that implement CORS
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Cross Origin Resource Sharing Testing Help & Guide",
                        <TCORSGuidesHelp
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
                        "Report on Cross Origin Resource Sharing Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-07"
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
                <h5 className="mSubTitle">Testing for Cross Site Flashing</h5>
                <span className="wsId">WSTG-CLNT-08</span><hr/>
                <h6>
                  ActionScript, like every other language, has some implementation patterns which could lead to security issues. In
                  particular, since Flash applications are often embedded in browsers, vulnerabilities like DOM-based Cross Site
                  Scripting (DOM XSS) could be present in flawed Flash applications
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Cross Site Flashing Testing Help & Guide",
                        <TCSFGuidesHelp
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
                        "Report on Cross Site Flashing Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-08"
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
                <h5 className="mSubTitle">Testing for Clickjacking</h5>
                <span className="wsId">WSTG-CLNT-09</span><hr/>
                <h6>
                  Clickjacking, a subset of UI redressing, is a malicious technique whereby a web user is deceived into interacting (in
                  most cases by clicking) with something other than what the user believes they are interacting with
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Clickjacking Testing Help & Guide",
                        <TCLKGuidesHelp
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
                        "Report on Clickjacking Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-09"
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
                <h5 className="mSubTitle">Testing WebSockets</h5>
                <span className="wsId">WSTG-CLNT-10</span><hr/>
                <h6>
                  Identify the usage of WebSockets and Assess its implementation by using the same tests on normal HTTP channels
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "WebSockets Testing Help & Guide",
                        <TWBSGuidesHelp
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
                        "Report on WebSockets Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-10"
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
                <h5 className="mSubTitle">Testing Web Messaging</h5>
                <span className="wsId">WSTG-CLNT-11</span><hr/>
                <h6>
                  Web Messaging (also known as Cross Document Messaging) allows applications running on different domains to
                  communicate in a secure manner
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Web Messaging Testing Help & Guide",
                        <TWMGGuidesHelp
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
                        "Report on Web Messaging Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-11"
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
                <h5 className="mSubTitle">Testing Browser Storage</h5>
                <span className="wsId">WSTG-CLNT-12</span><hr/>
                <h6>
                  Determine whether the website is storing sensitive data in client-side storage.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Browser Storage Testing Help & Guide",
                        <TBSTGuidesHelp
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
                        "Report on Browser Storage Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-12"
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
                <h5 className="mSubTitle">Testing for Cross Site Script Inclusion</h5>
                <span className="wsId">WSTG-CLNT-13</span><hr/>
                <h6>
                  Cross Site Script Inclusion (XSSI) vulnerability allows sensitive data leakage across-origin or cross-domain
                  boundaries
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Cross Site Script Inclusion Testing Help & Guide",
                        <TCSSIGuidesHelp
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
                        "Report on Cross Site Script Inclusion Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CLNT-13"
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
