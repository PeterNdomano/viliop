import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TWTLGuidesHelp from '../guide-view-helpers/TWTLGuidesHelp';
import TPOGuidesHelp from '../guide-view-helpers/TPOGuidesHelp';
import TSISUCGuidesHelp from '../guide-view-helpers/TSISUCGuidesHelp';
import TWEGuidesHelp from '../guide-view-helpers/TWEGuidesHelp';


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
                Analyze cryptography mechanisms used in components of this app
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Weak Transport Layer Security</h5>
                <span className="wsId">WSTG-CRYP-01</span><hr/>
                <h6>
                  Analyze Transport Layer Security for this Web App.
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Transport Layer Security Testing Help & Guide",
                        <TWTLGuidesHelp
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
                        "Report on Transport Layer Security Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CRYP-01"
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
