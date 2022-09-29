import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TRCSSGuidesHelp from '../guide-view-helpers/TRCSSGuidesHelp';
import TSCSSGuidesHelp from '../guide-view-helpers/TSCSSGuidesHelp';


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


          </div>
        </div>
      </div>
    )
  }
}
