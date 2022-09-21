import React, { Component } from 'react';
import Reporter from '../guide-view-helpers/Reporter';
import TDTFIGuidesHelp from '../guide-view-helpers/TDTFIGuidesHelp';
import TFBASGuidesHelp from '../guide-view-helpers/TFBASGuidesHelp';


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
              <h3 className="mTitle">Authorization Testing</h3>
            </div>
            <div className="col-md-12">
              <p className="mIntro">
                Test Authorization on <span className="linkText">{this.project.config.targetUrl}</span>
              </p>
            </div>

            {/* Sub Items */}

            <div className="col-md-12">
              <div className="GuideSubItem">
                <h5 className="mSubTitle">Testing Directory Traversal File Include</h5>
                <span className="wsId">WSTG-ATHZ-01</span><hr/>
                <h6>
                  Identify injection points that pertain to path traversal.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Directory Traversal File Include Testing Help & Guide",
                        <TDTFIGuidesHelp
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
                        "Report on Directory Traversal File Include Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHZ-01"
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
                <h5 className="mSubTitle">Testing for Bypassing Authorization Schema</h5>
                <span className="wsId">WSTG-ATHZ-02</span><hr/>
                <h6>
                  This kind of test focuses on verifying how the authorization schema has been implemented for each role or privilege to
                  get access to reserved functions and resources.
                </h6>
                <div className="text-right mBtnHolder">

                  <button
                    className="btn btn-sm btn-success text-dark"
                    onClick={() => {
                      this.props.params.modalCallback(
                        true,
                        "Bypassing Authorization Schema Testing Help & Guide",
                        <TFBASGuidesHelp
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
                        "Report on Bypassing Authorization Schema Testing",
                        <Reporter
                          viliop={this.props.params.viliop}
                          ID="WSTG-ATHZ-02"
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
