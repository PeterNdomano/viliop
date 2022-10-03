import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';

import TWTLGuidesHelp from '../guide-view-helpers/TWTLGuidesHelp';
import TPOGuidesHelp from '../guide-view-helpers/TPOGuidesHelp';


export default class EHTesting extends Component {
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

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing for Padding Oracle</h5>
                <span className="wsId">WSTG-CRYP-02</span><hr/>
                <h6>
                  A padding oracle is a function of an application which decrypts encrypted data provided by the client, e.g. internal
                  session state stored on the client, and leaks the state of the validity of the padding after decryption
                </h6>
                <div className="text-right mBtnHolder">
                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Padding Oracle Testing Help & Guide",
                        <TPOGuidesHelp
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
                        "Report on Padding Oracle Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-CRYP-02"
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
