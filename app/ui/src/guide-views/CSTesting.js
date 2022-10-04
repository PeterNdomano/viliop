import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TDBCSSGuidesHelp from '../guide-view-helpers/TDBCSSGuidesHelp';
import TJEGuidesHelp from '../guide-view-helpers/TJEGuidesHelp';
import THIGuidesHelp from '../guide-view-helpers/THIGuidesHelp';
import TCURLGuidesHelp from '../guide-view-helpers/TCURLGuidesHelp';


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


          </div>
        </div>
      </div>
    )
  }
}
