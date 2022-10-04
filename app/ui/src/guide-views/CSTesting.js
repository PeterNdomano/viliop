import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TDBCSSGuidesHelp from '../guide-view-helpers/TDBCSSGuidesHelp';

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
              <h3 className="mTitle">Testing for Weak Cryptography</h3>
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



          </div>
        </div>
      </div>
    )
  }
}
