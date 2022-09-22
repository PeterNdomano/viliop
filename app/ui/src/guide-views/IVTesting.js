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
import TSHGuidesHelp from '../guide-view-helpers/TSHGuidesHelp';


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


          </div>
        </div>
      </div>
    )
  }
}
